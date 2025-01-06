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
    <div>
        <h2>Login</h2> <br /><br />
        <input type="text" placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)} /> <br /><br />
        <input type="pasword" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} /> <br /><br />
        <button onClick={handleSubmit} className='bg-black text-white py-2 px-3 rounded-lg'>Submit</button> <br /> <br />
    </div>
  )
}

export default Login