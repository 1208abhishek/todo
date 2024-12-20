const express  = require('express') ; 
const router = express.Router() ;
const zod = require('zod') ; 
const jwt = require('jsonwebtoken')
const JWT_SECRET = require('../config');
const authMiddleware = require('./middleware');
const { User } = require('../db'); 
const { Todo } = require("../db"); 

const signupSchema = zod.object({ 
    username: zod.string(), 
    email: zod.string().email(),
    password: zod.string() 
})
router.post('/signup',async (req,res)=>{ 
 
    const success = signupSchema.safeParse(req.body) ;  
    if(!success.success) { 
        return res.status(403).json({
            message: "input vaildation failed"
        })

    } 
    

    // check for existing user 
    const existinguser = await User.findOne({ 
        email: req.body.email 
    })

    // console.log(existinguser); 
    if(existinguser) { 
        return res.status(411).json({ 
            msg: "user already exists!"
        })
    }

    const createuser = await User.create({ 
        username: req.body.username, 
        email: req.body.email, 
        password: req.body.password
    })

 
    const userid = createuser._id; // storing _id from mongodb to useid const for jwt 
    
    const token= jwt.sign({userid}, JWT_SECRET)

    res.json({
        message: "user created successfully", 
        token: token
    })

})



const signinSchema = zod.object({
    email: zod.string().email(), 
    password: zod.string()
})

router.post('/signin', async (req,res)=>{ 

    const {success} = signinSchema.safeParse(req.body); 

    if(!success){ 
        return res.status(411).json({
            message: "input validation failed" 
        })
    }

    const userfind  = await User.findOne({
        email: req.body.email, 
        password: req.body.password 
    }) 
    
    if(!userfind) { 
        return res.status(411).json({ 
            message:"user doesn't exist / error while loggin ", 
            
        })
    }

    const userid = userfind._id ; 
    const token = jwt.sign({userid}, JWT_SECRET) ; 

    res.json({ 
        message: "signin successfull", 
        token: token
    })

    
})

//  we need to do authentication before update our todo list for that case  we use authMiddleware 
const todocreateSchema = zod.object({ 
    todo: zod.string()
})


// creating todo after signin and Authentication via jwt. 
router.post('/todo',authMiddleware, async (req,res) =>{ 
    const {success} = todocreateSchema.safeParse(req.body); 
    
    if(!success) { 
        return res.status(411).json({ 
            message: "provide correct inputs/ validation failed"
        })
    } 

    const createTodo = Todo.create({ 
        todo:req.body.todo, 
        userId: req.userid
    })

    res.json({ 
        message: "todo created  successfully"
    })

})



router.get('/todo:id', authMiddleware, async (req,res)=>{ 
    
})




router.delete('/todo',authMiddleware, async (req,res) =>{ 
    
}) 



module.exports = router; 
