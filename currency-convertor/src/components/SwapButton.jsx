import React from 'react'
import './SwapButton.css'


const SwapButton = ({swap}) => {
  return (
 
    <button
    onClick={swap} type="button">
          Swap
    </button>

  )
}

export default SwapButton