import React from 'react'
import { useState } from 'react'

const Login = () => {

    const [useName, setUserName] = useState('')
    const [password, setPassword] = useState('')


    const handleSubmit=()=>{


    }
    return (
        <div>
            <h2>Login</h2>
            <input type="text" placeholder='enter your' onChange={(e)=> setUserName(e.target.value)} />

            <input type="text" placeholder='enter Your password' onChange={(e)=> setPassword(e.target.value)} />
            <button onClick={handleSubmit}>Submit

            </button>
            </div>
    )
}

export default Login