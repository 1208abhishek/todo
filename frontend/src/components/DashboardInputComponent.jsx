import { useState } from "react"

export const DashboardInputComponent = ({addTodo}) =>{ 

    const[value, setValue] =useState("") ; 
      
    function handleSubmit () { 
        addTodo(value); 
    }
    
    


    return ( 
        <form onSubmit={handleSubmit}> 
            <input  type="text"  placeholder="what's in your mind ? " onChange={(e) => { 
               setValue(e.target.value)
            }}/> 
            <button>Add Task</button>

        </form> 
    )
}
