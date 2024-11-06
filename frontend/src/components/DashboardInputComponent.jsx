import { useState } from "react"

export const DashboardInputComponent = ({addList}) =>{ 

    const[value, setValue] =useState("") ; 
       
    function handleSubmit () { 
        event.preventDefault() // since we are using form we need to stop the reload by default  
        addList(value); 

        setValue(" ") // after final submit we need to clear the Input component
        
    }  

    return ( 
        <form onSubmit={handleSubmit}> 
            <input value={value}  type="text"  placeholder="what's in your mind ? " onChange={(e) => { 
               setValue(e.target.value)
            }}/> 
            <button>Add Task</button>
        </form> 
    ) 
}
