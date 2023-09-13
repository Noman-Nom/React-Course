import React from 'react'
import { NavLink } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import Test from '../Test/Test'


const User = () => {
  const {userid} = useParams()
  return (
    <div>

      <div><NavLink to={`/user/:${userid}`} ><Test/></NavLink></div>
      <div><NavLink to='/user/:userid' >Farhan</NavLink></div>
      <div><NavLink to='/:userid' >Raza</NavLink></div>
    </div>
  )
}

export default User