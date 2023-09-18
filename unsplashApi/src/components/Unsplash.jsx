import React from 'react'
import './Unsplash.css'

import { useState } from 'react'

const Unsplash = () => {

  const [inputData, setInputData] = useState("")
  // console.log(inputData)
  return (
    <div className="container">
      <h1>Search Your Favorate Images</h1>
     <form action="">
      <input type="text" value={inputData} id='search-input' placeholder='Search images...'
        onChange={(e)=>setInputData(e.target.value)}
      />

     </form>

    </div>
  )
}

export default Unsplash