import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import '../../css/app.css'

function Register(props) {
    const navigate = useNavigate();

    const [ username, setUsername ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ retypedPassword, setRetypedPassword ] = useState("");

    const submitCredentials = () => {
        if(password !== retypedPassword) {
            alert("Passwords don't match!");
            return
        }

        const credentials = {
            username,
            email,
            password
        }
        axios.post('/api/register', credentials)
            .then(response => {
                if(response.data === 'success') {
                    props.setGlobalName(username)
                    navigate('/dashboard')
                }
            })
            .catch(error => {
                alert('Account already exists');
            })
    }

    return (
        <div id='container'>
            <h1>Register</h1>

            <div>
                <label>Username: </label> <br />
                <input className='fields' type='text' placeholder='Enter your username' onChange={(e) => setUsername(e.target.value)}/>
                <br /> <br />

                <label>Email: </label> <br />
                <input className='fields' type='text' placeholder='Enter your email' onChange={(e) => setEmail(e.target.value)}/>
                <br /> <br />

                <label>Password: </label> <br />
                <input className='fields' type='password' placeholder='Enter your password' onChange={(e) => setPassword(e.target.value)}/>
                <br /> <br />

                <label>Retype Password: </label> <br />
                <input className='fields' type='password' placeholder='Retype your username' onChange={(e) => setRetypedPassword(e.target.value)}/>
                <br /> <br />

                <div id='submitBtt'>
                    <button className='btt' onClick={() => submitCredentials()}>Register</button>
                </div>
            </div>
        </div>
    );
}

export default Register;
