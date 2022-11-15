import { Link, useNavigate } from "react-router-dom"
import React,{useEffect} from 'react';
import { useState } from 'react';

const Login = () =>{
    const nav = useNavigate()
    const [data, setData] = useState([])
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const handleLogin = (e) => {
        e.preventDefault()
        if(data?.email === email && data?.password === password) {
            nav('/')
        }else {
            alert('invalid Email or Password You Sign UP')
        }
    }
    useEffect(() => {
        setData(JSON.parse(localStorage.getItem('signup')))
    },[])
    return(
        <>
            <div className="login_container">
                <form action="" className="login_form">
                    <h4 style={{textAlign:'center', color: 'black', marginBottom: '0.5rem', marginTop: '0.5rem'}}>Login</h4>

                    <div className="input_field">
                        <span>Email</span>
                        <input type="email" required placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div className="input_field">
                        <span>Password</span>
                        <input type="password" required placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    </div><br />
                    <div>
                        <button onClick={(e) => {handleLogin(e)}}>Login</button>
                        <button style={{marginTop:"1rem", border:"none", textDecoration:"underline"}} onClick={() => nav('/signup')}>SignUp</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Login 