import { Component, forwardRef } from "react";

 class LoginClass extends Component {
    constructor(props) {
        super(props);
        this.txtUserNameRef = props.ref;
    }

    render() {
        return <input type="text" ref={this.txtUserNameRef} placeholder="Enter your userName name" />
    }
}

const ForwardRefWrapper = forwardRef((props,ref) => {
    return <LoginClass ref={ref} />
});

export default ForwardRefWrapper;