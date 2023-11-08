import { Component, useState } from "react";


export class StatusComponent extends Component {

    constructor(props) {
        super(props);

        this.state = { LastStatusUpdate : "Never" };
        //let [LastStatusUpdate,setLastStatusUpdate] = useState();
    }


    // This method is called when the component is mounted
    componentDidMount(){
        console.log('StatusComponent mounted');
    }

    // This method is called when the component is updated
    //1. State is updated - setState is called
    //2. Props are updated - Parent component is updated
    //3. ForceUpdate is called
    componentDidUpdate(){ 
        console.log('StatusComponent updated');
    }

    // This method is called when the component is updated
    shouldComponentUpdate(nextProps, nextState){
        return this.props.items.length > 2;
    }

    // This method is called when the component is unmounted
    componentWillUnmount(){
        console.log('StatusComponent unmounted');

    }

    totalCompleted(){ 
        return this.props.items.filter(item => item.IsCompleted).length;
    }

    render() {
        return <div>
                <div><strong>{new Date().toString()}</strong></div>
            Status : Completed : {this.totalCompleted()}
                        Pending : {this.props.items.length - this.totalCompleted()}
                 <div><small><strong>Last Update : {this.state.LastStatusUpdate}</strong></small></div>
                 <button onClick={() => this.setState({LastStatusUpdate : new Date().toLocaleTimeString()})}>Refresh</button>
                 <button onClick={() => this.forceUpdate()}>Force Refresh</button>
                </div>
    }
}