import { Link, useNavigate } from "react-router-dom"
import { useState } from 'react';


const SignUp = () =>{
    const [fullname, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const nav = useNavigate()
    const handleSignup = (e) => {
        e.preventDefault()
        let singUpdata = {fullname: fullname, email: email, password: password}
        localStorage.setItem('signup', JSON.stringify(singUpdata))
        alert("Success SignUp")
        nav('/login')
    }
    return(
        <>
            <div className="login_container">
                <form action="" className="login_form">
                    <h4 style={{textAlign:'center', color: 'black', marginBottom: '0.5rem', marginTop: '0.5rem'}}>SignUp</h4>
                    <div className="input_field">
                        <span>Full Name</span>
                        <input type="text" required placeholder="Enter Full Name" value={fullname} onChange={(e) => setFullName(e.target.value)}/>
                    </div>
                    <div className="input_field">
                        <span>Email</span>
                        <input type="email" required placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div className="input_field">
                        <span>Password</span>
                        <input type="password" required placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    </div><br />
                    <div>
                        <button onClick={(e) => handleSignup(e)}>SignUp</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default SignUp 