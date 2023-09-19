import React from 'react'
import { useState } from 'react'
import './Food.css'

const Food = () => {
// use states.......................................
const [data, setData] = useState([])
const [inputData, setInputData] = useState('')

// use effects......................................


// functions.....................................

const  handleClick = ()=>{

}


  return (
    <div className="container">

        <div className="input-box">
            <input type="text" value={inputData} onChange={(e)=>setInputData(e.target.value)} />
            <button onClick={handleClick}>Search</button>
        </div>
    </div>

  )
}

export default Food