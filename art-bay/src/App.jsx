import React from 'react'
import { useState,useEffect } from 'react';


const App = () => {
  // let Api_Key = "NiDhEnXNtbOWTueH0yzEr0xmZ2MCPfczCeZwmPZ-xwo";

  const [input, setInput] = useState('boys')
  const [data, setData] = useState([])


  useEffect(()=>{
     
    getData()
   

        

  },[input])

 
  

  const getData = async () => {

    try {
        

         
      const response = await fetch(`https://api.unsplash.com/search/photos/?query=${input}&client_id=NiDhEnXNtbOWTueH0yzEr0xmZ2MCPfczCeZwmPZ-xwo`)

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

      <form onSubmit={(e)=>{
        e.preventDefault()
      }}  >
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