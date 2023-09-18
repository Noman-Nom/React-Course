import React, { useEffect } from 'react'
import './Unsplash.css'



import { useState } from 'react'

const Unsplash = () => {

  const key = "NiDhEnXNtbOWTueH0yzEr0xmZ2MCPfczCeZwmPZ-xwo";

// useStates.................................
  const [inputData, setInputData] = useState("")
  const [results, setResults] = useState([])
  // console.log(inputData)



  // function.....................................


  const searchImages = async()=>{
    // const url = `https://api.unsplash.com/search/photos/?page=${page}&query=${inputData}&client_id=${key}`;
    const url = `https://api.unsplash.com/photos/?client_id=${key}`;

    try {
      const response=await fetch(url)
      const data = await response.json()
      const newResults = data.results
     console.log(data[0])  

      
    } catch (error) {
      console.log(error)
    }
  }
 

  searchImages()


  const handleSubmit=(e)=>{
    e.preventDefault()
    
  }
  

  return (
    <div className="container">
      <h1>Search Your Favorate Images</h1>
     <form onSubmit={handleSubmit} >
      <input type="text" value={inputData} id='search-input' placeholder='Search images...'
        onChange={(e)=>setInputData(e.target.value)}
      />
      <button type='submit' id='search-btn'>Search</button>

     </form>

    </div>
  )
}

export default Unsplash