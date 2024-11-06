
export const DeleteTodo = ({deleteItem, index}) =>{ 
    return <div> 
        <button onClick={(e) => {
            deleteItem(index)
        }}>Delete Todo</button>
    </div>
}