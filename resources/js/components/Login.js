import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import '../../css/app.css'

function Login(props) {
    const navigate = useNavigate();

    const [ username, setUsername ] = useState("")
    const [ password, setPassword ] = useState("")

    const submit = () => {

        const credentials = {
            username,
            password
        }
        axios.post('/api/login', credentials)
            .then(response => {

                if(response.data === 'success') {
                    props.setGlobalName(username)
                    navigate('/dashboard', {state: { username, password }})

                } else if(response.data === 'fail') {
                    alert('No such account with that password')

                }
            })
            .catch(e => {
                alert('Server error')
            })
    }

    return (
        <div id='container'>
            <h1>Login</h1>

            <div>
                <label>Username: </label> <br />
                <input className='fields' type='text' placeholder='Enter your username' onChange={(e) => setUsername(e.target.value)} />
                <br /> <br />

                <label>Password: </label> <br />
                <input className='fields' type='password' placeholder='Enter your password' onChange={(e) => setPassword(e.target.value)} />
                <br /> <br />

                <div id='submitBtt'>
                    <input className='btt' type='submit' value='Login' onClick={() => submit()} />
                    <Link to='/register'>
                        <button className='btt'>Register</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Login;
