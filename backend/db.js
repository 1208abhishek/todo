const mongoose = require('mongoose') ; 

mongoose.connect("") ;  
 

// user schema 
const UserSchema = new mongoose.Schema({ 
    username: String, 
    email: String , 
    password: String 
})

// todos schema 
const TodosSchema = new mongoose.Schema({ 
    todo: String
})

const User = mongoose.model('User', UserSchema) ; 
const Todo = mongoose.model('Todo', TodosSchema) ; 
module.exports = { 
    User, 
    Todo
}
