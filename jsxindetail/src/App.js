import { useState } from "react";

export default function App() {

    //state = [variable, function]
    let [greetings,setGreetings] = useState("Hello World");
    let [count,setCount] = useState(0);
    let [currentMessage,setCurrentMessage] = useState("");
    let [message,setMessage] = useState([]);

    function handleOnClick(){
        //updating the state though the function
        setGreetings(greetings.toUpperCase());
       // alert(greetings);

        if(currentMessage.length === 0)
        {
            alert("Please enter a message");
            return;
        }

        setMessage([...message,{ ToDo : currentMessage, IsCompleted : false}]);
        setCurrentMessage("");
    }

    return(
    <>
        {greetings}
        <hr />
        <h1>Todays Messages</h1>
        {
            message.map((msg,index) => <span><p>{msg.ToDo}</p>{msg.IsCompleted ? "Completed" : "Pending"}</span>)
        }
        <hr />
        <input type="text" value={currentMessage} onChange={(e) => setCurrentMessage(e.target.value)} />
        <button onClick={handleOnClick}>Click Me</button>  
    </>
    )
}