import React from 'react'
import './Button.css'

const Button = ({from,to}) => {
  return (
    <div className='container'>
        <button type="submit">
              Convert {from.toUpperCase()} to {to.toUpperCase()}
        </button>
    </div>
  )
}

export default Button
