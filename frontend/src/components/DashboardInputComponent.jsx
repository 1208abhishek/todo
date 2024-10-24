import { useState } from "react"

export const DashboardInputComponent = ({label, placeholder, onPress}) =>{ 
    const[value, setValue] =useState("") ; 
    function handleSubmit (e) { 
        console.log(e.target.value)``
    }   
    
    return ( 
        <form submit={handleSubmit}> 
            <input type="text"  placeholder="what's you wanna add ? "/> 
            <button>Add Task</button>

        </form> 
    )
}