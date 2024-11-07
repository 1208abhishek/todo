const mongoose = require('mongoose') ; 
const { string } = require('zod');

mongoose.connect("") ;  


// user schema 
const UserSchema = new mongoose.Schema({ 
    username: String, 
    email: String , 
    password: String 
})

// todos schema 
const TodosSchema = new mongoose.Schema({ 
    todo: {
        type: String, // Corrected this to String, not Zod's 'string'
        required: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId, // Reference the ObjectId of the User
        ref: "User", // Refers to the User model
        required: true
    }

})

const User = mongoose.model('User', UserSchema) ; 
const Todo = mongoose.model('Todo', TodosSchema) ; 
module.exports = { 
    User, 
    Todo
}

