import { useState } from "react"
import axios from 'axios';

export const DashboardInputComponent = ({addList}) =>{ 

    const[value, setValue] =useState("") ; 
    

    function handleSubmit () { 
        event.preventDefault() // since we are using form we need to stop the reload by default  
        addList(value); 

        setValue(" ") // after final submit we need to clear the Input component
        
    }  
      

    // NOT WORKING COS I NEED TO FETCH USERID AND TOKEN SOMEHOW 
    // async function handleSubmit() { 
    //     // along with todo we also need to pass the header and also need userid with reference the todo to be created . 
    //     const response = await axios.post("http://localhost:3000/api/v1/user/todo", { 
    //         todo: value, 
    //     }); 
    //     console.log(value);

    //     const newtodo = response.json() ; 
    //     console.log(newtodo);
    //     addList(newtodo);

    //     setValue(" ") 
    // }

    
    

    return ( 
        <form onSubmit={handleSubmit}> 
            <input value={value}  type="text"  placeholder="what's in your mind ? " onChange={(e) => { 
               setValue(e.target.value)
            }}/> 
            <button>Add Task</button>

            
        </form> 
    ) 

}


