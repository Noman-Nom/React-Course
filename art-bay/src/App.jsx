import React from 'react'
import { useState,useEffect } from 'react';


const App = () => {


  const [input, setInput] = useState('')
  const [data, setData] = useState([])

 
  let Api_Key = "NiDhEnXNtbOWTueH0yzEr0xmZ2MCPfczCeZwmPZ-xwo";

  const getData = async (e) => {

    try {
          e.preventDefault()

      const response = await fetch(`https://api.unsplash.com/search/photos/?query=${input}&client_id=${Api_Key}`)

      const data = await response.json()
      console.log(data.results)
      setData(data.results)

      // console.log(input)
     

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>

      <form onSubmit={getData} >
        <input  type="text" placeholder='search your fvt images'
        
        value={input}
        onChange={(e)=>setInput(e.target.value)}
        />
        <button > click</button>
      </form>

          <div className="images">
          {data.map((result) => (
          // <div className='row'>
          <div className="col" key={result.id}>
            <img src={result.urls.small} alt={result.alt_description} />
            <h4>
              <a href={result.links.html} target="_blank" rel="noopener noreferrer">
                {result.alt_description}
              </a>
            </h4>
          </div>

        
        ))}
          </div>

    </div>
  )
}

export default App