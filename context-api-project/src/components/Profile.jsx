import React from 'react'
import { useContext } from 'react'
import UserContext from '../Context/UserContext'

const Profile = () => {
    const {user} = useContext(UserContext)
        if(!user)  return  <div>Please Login!!</div>

        return <div>{user.userName} </div>
}

export default Profile