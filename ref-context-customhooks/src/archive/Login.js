import { forwardRef } from "react"

 const Login  = forwardRef((props,ref) =>{
    return (
        <div>
            <h1>Login</h1>
            <input type="text" ref={ref} placeholder="Enter your userName name" />
            <input type="password" placeholder="Enter your password" />
            <button>Login</button>
        </div>
    )
})

export default Login;