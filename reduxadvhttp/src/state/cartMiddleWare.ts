import axios from "axios";
import store from "./store";
import { fetchToDoAsync } from "./todoSlice";

export const cartMiddleWare = store => next => action => {
    console.log(action);
    if (action.type === "ADD_TODO_ITEM") {

       axios.post("http://localhost:8080/todo", action.payload)
            .then(response => store.dispatch(fetchToDoAsync()))
            .catch(error => console.log(error));
    }

    if(action.type === "DELETE_TODO_ITEM") 
    {
        axios.delete("http://localhost:8080/todo/" + action.payload)
            .then(response => store.dispatch(fetchToDoAsync()))
            .catch(error => console.log(error));
    }

    

    return next(action);
}