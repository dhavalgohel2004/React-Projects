import React, { useState, useContext } from 'react'
import UserContext from '../context/UserContext'

function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const {setUser} = useContext(UserContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({username, password});
    } 

  return (
    <div className='flex flex-col'>
        <h2>Login</h2> 
        <input type="text" placeholder='Username' className='py-2 px-3 rounded-lg mt-3 mb-5 border-slate-950 border' value={username} onChange={(e) => setUsername(e.target.value)} /> 
        <input type="pasword" placeholder='Password' className='py-2 px-3 rounded-lg mb-5 border-slate-950 border' value={password} onChange={(e) => setPassword(e.target.value)} /> 
        <button onClick={handleSubmit} className='bg-black text-white py-2 px-3 rounded-lg mb-3'>Submit</button> 
    </div>
  )
}

export default Login