import { Component, PureComponent } from "react";

export class MessageComponent extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            message: "Hello World!"
        };
    }

    componentDidMount() {
        console.log("Component mounted!");
    }

    componentDidUpdate() {
        console.log("Component updated!");
    }


    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                {this.props.message}
                <button onClick={() => this.setState({ message: "Goodbye World!" })}>
                    Click Me!
                </button>
            </div>
        );
    }
}