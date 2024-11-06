

import { useState } from 'react'
import {DashboardInputComponent} from '../components/DashboardInputComponent'
import { TodoItem } from '../components/todoitem'
export const TodoDashboard = () =>{ 
     
    const[listtodo, setListtodo] = useState([]); 
    

    
    let addList = (value) =>{ 
        setListtodo([...listtodo, value]) 
    }
    const deletelistItem = (key)=>{ 
        let newlisttodo = [...listtodo]; 
        newlisttodo.splice(key, 1);  

        setListtodo([...newlisttodo])
    }
    return <div> 
        <DashboardInputComponent addList={addList}/> 
        {listtodo.map((listItem,index) => { 
            return ( 
                
                <TodoItem item={listItem} index={index} key={index} deleteItem={deletelistItem}> </TodoItem>
            )
        })}


    </div>    
}