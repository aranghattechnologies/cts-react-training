import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "./state/store"
import { ToDoItem, fetchToDoAsync,addToDoItem} from "./state/todoSlice";
import { useEffect, useState } from "react";

export default function ToDoItems(){

    let todo = useSelector((state:RootState) => state.todo);
    let dispatch = useDispatch<AppDispatch>();
    let [newTodo, setTodo] = useState<ToDoItem>()

    useEffect(() => {
        dispatch(fetchToDoAsync());
    },[]);

    function handleAdd(){
        dispatch({type : "ADD_TODO_ITEM", payload : newTodo});
    }
    return(
        <div>
            <h1>ToDoItems</h1>
            <input type="text" placeholder="Enter a new todo item"
                onChange={(e) => setTodo({name : e.target.value, done : false, id : 0})}
            />
            <button type="button" onClick={handleAdd}>Add</button>
            {todo.status === 'loading' && <h2>Loading...</h2>}
            {todo.status === 'idle' && <div>{
                todo.items.map((item) => (
                    <div key={item.id}>
                        <h3>{item.name}</h3>
                        <p>{item.done ? "Completed" : "Not Completed"}</p>
                        <button type="button"
                            onClick={() => dispatch({type : "DELETE_TODO_ITEM", payload : item.id})}
                        >Delete</button>
                        <hr />
                    </div>
                    
                ))
                }
                </div>
            }
        </div>
    )
}