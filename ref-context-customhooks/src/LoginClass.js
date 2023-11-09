import { Component, forwardRef } from "react";

export class LoginClass extends Component {
    constructor(props,ref) {
        super(props);
        this.txtUserNameRef = ref;
    }

    render() {
        return <input type="text" ref={this.txtUserNameRef} placeholder="Enter your userName name" />
    }
}

export const ForwardRefWrapper = forwardRef((props,ref) => {
    return <LoginClass {...props} ref={ref} />
});