const express = require('express') 
const router = express.Router() ; 

const userRouter = require('./userrouter') ; 


router.use('/user', userRouter) ; 

module.exports = router; 