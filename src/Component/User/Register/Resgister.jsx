import './Register.css'
import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'

const Register = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const navigate = useNavigate()
    const navigateToQuiz = () => navigate('/quiz')

    const handleSubmit = async () =>{

        const host = 'http://localhost:5000/signup'

        if(password !== confirmPassword) setErrorMessage('Password Does not Match !!!')
        else if(name === '' || email === '' ||  password === '' ||  confirmPassword === '' ) setErrorMessage('Enter Above Fields !!!')
        else {

            let result = await fetch(host, {
                method: 'POST',
                body: JSON.stringify({ name,email,password }),
                headers: { 'Content-Type': 'application/json' }
            })
            result = await result.json()
            navigateToQuiz()   
        }
        
    }

    return (
        <div id="register">
            <div className="Container">
                <h3>Sign Up</h3>
                <div className="form-floating mb-3" >
                    <input type="name" className="form-control"  id="floatingInput" value={name} placeholder="enter full name" onChange={(e)=>setName(e.target.value)} />
                    <label htmlfor="floatingInput" className="floatingIn">Name</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="email" className="form-control" id="floatingInput" value={email} placeholder="name@example.com" onChange={(e)=>setEmail(e.target.value)} />
                    <label htmlhtmlfor="floatingInput" className="floatingIn">Email address</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="password" className="form-control" id="floatingPassword" value={password} placeholder="Password" onChange={(e)=>setPassword(e.target.value)} />
                    <label htmlfor="floatingInput" className="floatingIn">Password</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="password" className="form-control" id="floatingConPassword" value={confirmPassword} placeholder="Confirm Password" onChange={(e)=>setConfirmPassword(e.target.value)} />
                    <label htmlfor="floatingConPassword" className="floatingIn">Confirm Password</label>
                </div>
                <button type="submit" className="btn btn-primary" id="Submit" onClick={handleSubmit}>Submit</button>
                {errorMessage && <div className='Error'>{errorMessage}</div>} 
            </div>
        </div>
    )
}

export default Register