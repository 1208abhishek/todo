const JWT_SECRET = require("../config");
const jwt = require('jsonwebtoken');
const authMiddleware = (req,res,next) => { 
    const authHeader = req.headers.authorization; //authorization header

    if (!authHeader || !authHeader.startsWith("Bearer")) { 
        return res.status(403).json({});    
    }
    

    
    try { 
        const token = authHeader.split(' ')[1]; 
    
        
        // Verify the token
        const decoded = jwt.verify(token, JWT_SECRET); 
   
    
        req.userid = decoded.userid; 

        
        next(); 
    } catch (err) { 
        console.log("Error during token verification:", err);  // Log the error object
        return res.status(403).json({ 
            message: "something is wrong"
        });
    }
    
        

    
} 

module.exports = authMiddleware; 