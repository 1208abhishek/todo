import { DeleteTodo } from "./deleteTodo"
export const TodoItem = ({item, deleteItem, index})=> { 
     
    return ( 
        <div> 
            <p>{item}</p>
            <DeleteTodo deleteItem={deleteItem} index={index}></DeleteTodo>

        {/* OR we can simply use this code for deleting todo instead of a new component  */}
            {/* <button onClick={(e) => {
                deleteItem(index)
            }}>Delete Todo</button> */}
        </div>
    )


}