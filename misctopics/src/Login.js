import axios from 'axios';
import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom';

export default function Login(){

    let [cred,setCred] = useState({email : "",password : ""});
    let nav = useNavigate();

    function onLogin(){
        cred.Name = "Sree";
        axios.post("http://localhost:5084/api/login",cred)
        .then(d => {
                sessionStorage.setItem("token",d.data.Token);
                nav("/");

        }

            )
        .catch(e => console.log(e));
    }

    return(
        <div>
            <h1>Login Page</h1>
            <input type="text" placeholder="Username" value={cred.username} onChange={(e) => setCred({...cred,email : e.target.value})} />
            <input type="password" placeholder="Password" value={cred.password} onChange={(e) => setCred({...cred,password : e.target.value})} />

            <button onClick={onLogin}>Login</button>
        </div>
    )
}