import { useEffect,useState } from "react";

export default function Status2Component(props) {

    let [isRefreshed, setIsRefreshed] = useState(false);

    //componentDidUpdate + componentDidMount
    useEffect(() => console.log("When the component is updated and mounted"));

    //componentDidMount
    useEffect(() => console.log("When the component is mounted"), []);

    //componentDidUpdate
    useEffect(() => console.log("New Item has added"),[props.items.length]);

    //componentDidUpdate
    useEffect(() => console.log("Refreshed"),[isRefreshed]);

    //componentWillUnmount
    useEffect(() => {
        return () => console.log("When the component is unmounted");
    },[]);

    return <div className="bg-info">
        <div><strong>{new Date().toString()}</strong></div>
        <button onClick={() => setIsRefreshed(!isRefreshed)}>Refresh</button>
        Status : Completed : {props.items.filter(item => item.IsCompleted).length}
        Pending : {props.items.length - props.items.filter(item => item.IsCompleted).length}
        <div><small><strong>Last Update : {new Date().toLocaleTimeString()}</strong></small></div>
        </div>
}