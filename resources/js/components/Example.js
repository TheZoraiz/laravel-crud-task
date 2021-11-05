import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Login from './Login'
import Register from './Register';
import Dashboard from './Dashboard';

import '../../css/app.css'

function Example() {
    const [ globalName, setGlobalName ] = useState('')

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={ <Login setGlobalName={setGlobalName} /> } />
                <Route path='register' element={ <Register setGlobalName={setGlobalName}/> } />
                <Route path='dashboard' element={ <Dashboard username={globalName} /> } />
            </Routes>
        </BrowserRouter>
    );
}

export default Example;

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
