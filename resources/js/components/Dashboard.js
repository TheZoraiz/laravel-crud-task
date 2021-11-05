import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import '../../css/app.css'

function Dashboard(props) {
    const navigate = useNavigate();

    const [ users, setUsers ] = useState([])

    useEffect(() => {
        axios.get('/api/dashboard')
            .then(response => {
                setUsers(response.data)
            })
    }, [])

    const deleteAccount = (name) => {
        axios.post('/api/delete', { username: name })
            .then(response => {
                if(response.data === 'success') {
                    navigate('/')
                }
            })
            .catch(e => {
                console.log('Unable to delete your account')
            })
    }

    return (
        <div id='dashboard'>
            <div>
                <button className='btt' onClick={() => deleteAccount(props.username)} >Delete Account</button>
                <button className='btt' onClick={() => navigate('/')} >Logout</button>
            </div>

            <table>
                <tr>
                    <th>ID</th>
                    <th>Username</th>
                    <th>Email</th>
                </tr>
                {
                    users.map(user => {
                        return(
                            <tr>
                                <td>{ user.id }</td>
                                <td>{ user.username }</td>
                                <td>{ user.email }</td>
                            </tr>
                        )
                    })
                }
            </table>
        </div>
    );
}

export default Dashboard;
