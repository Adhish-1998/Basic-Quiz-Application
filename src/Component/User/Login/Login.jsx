import './Login.css'
import { Link, useNavigate } from "react-router-dom";
import { useState } from 'react';

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errorMessage, setErrorMessage] = useState(null)

    const navigate = useNavigate()
    const navigateToQuiz = () => navigate('/quiz')
    const navigateToRegister = () => navigate('/signup')

    const handleSubmit = async() =>{
        const host = 'https://basic-quiz-application.vercel.app/login'

        let result = await fetch(host,{
            method : 'POST',
            body: JSON.stringify({email,password}),
            headers : { 'Content-Type' : 'application/json' }
        }) 
        result = await result.json()
        if(result.data) navigateToQuiz();
        else {
            setErrorMessage('Invalid Login Credentials !!!')
        }

    }

    return (
        <div id="login">
            <div class="Container">
                <h3>User Login</h3>
                <div class='input'>
                    <div class="form-floating mb-3">
                        <input type="email" class="form-control" id="floatingInput" value={email} placeholder="name@example.com" onChange={(e)=>setEmail(e.target.value)} />
                        <label for="floatingInput" class="floatingIn">Email address</label>
                    </div>
                    <div class="form-floating mb-3">
                        <input type="password" class="form-control" id="floatingPassword" value={password} placeholder="Password" onChange={(e)=>setPassword(e.target.value)} />
                        <label for="floatingInput" class="floatingIn">Password</label>
                    </div>
                    <button type="Login" class="btn btn-primary" id="Submit" onClick={handleSubmit}>Login</button>
                    <button type="Register" class="btn btn-primary" id="Submit" onClick={navigateToRegister}>Register</button>
                    {errorMessage && <div className='Error'>{errorMessage}</div>}
                </div>
            </div>
        </div>
    )
}

export default Login