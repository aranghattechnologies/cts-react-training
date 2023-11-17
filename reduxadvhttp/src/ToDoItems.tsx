import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "./state/store"
import { fetchToDoAsync } from "./state/todoSlice";
import { useEffect } from "react";

export default function ToDoItems(){

    let todo = useSelector((state:RootState) => state.todo);
    let dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(fetchToDoAsync());
    },[]);

    return(
        <div>
            <h1>ToDoItems</h1>
            <p>Current Stauts : {todo.status}</p>
        </div>
    )
}