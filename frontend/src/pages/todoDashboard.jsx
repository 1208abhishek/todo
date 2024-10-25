

import { useState } from 'react'
import {DashboardInputComponent} from '../components/DashboardInputComponent'
import { TodoItem } from '../components/todoitem'
export const TodoDashboard = () =>{ 
     
    const[listtodo, setListtodo] = useState([]); 

    
    let addList = (value) =>{ 
        setListtodo([...listtodo, value]) 
    }


 

    return <div> 
        <DashboardInputComponent addList={addList}/> 
        {listtodo.map((listItem,index) => { 
            return ( 
                
                <TodoItem item={listItem} key={index}> </TodoItem>
            )
        })}


    </div>    
}