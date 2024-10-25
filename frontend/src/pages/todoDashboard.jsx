

import {DashboardInputComponent} from '../components/DashboardInputComponent'
import { TodoItem } from '../components/todoitem'
export const TodoDashboard = () =>{ 
     




    return <div> 
        <DashboardInputComponent/>
        <TodoItem addtodo ={addTodo}></TodoItem>
    </div>    
}