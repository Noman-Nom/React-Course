import React from 'react'
import { useState,useContext } from 'react'
import UserContext from '../Context/UserContext'

const Login = () => {
// ......................states.........
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')

    const {setUser} = useContext(UserContext)

// .....................functions...........
    const handleSubmit=(e)=>{
        e.preventDefault()

        setUser({userName,password})   // yahan se hum data bhejh rhen hen 
        


    }
    return (
        <div>
            <h2>Login</h2>
            <input type="text" placeholder='enter your' 
            value={userName}
            onChange={(e)=> setUserName(e.target.value)} />
                    <br />
                    <br />
            <input type="text" placeholder='enter Your password'
            value={password}
            onChange={(e)=> setPassword(e.target.value)} />
            <button onClick={handleSubmit}>Submit

            </button>
            </div>
    )
}

export default Login