const express = require('express')
const rootRouter = require('./routes/routes')
const app = express (); 
const cors = require('cors') 




app.use(cors()); 
app.use(express.json()) ; // parse json bodies 
app.use('/api/v1', rootRouter); // handle all the routes 



app.listen(3000, (req,res)=>{ 
    console.log(`server is listening to port ${3000}`); 

})