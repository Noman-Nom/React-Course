import React, { useEffect } from 'react'
import './Unsplash.css'



import { useState } from 'react'

const Unsplash = () => {

  const key = "NiDhEnXNtbOWTueH0yzEr0xmZ2MCPfczCeZwmPZ-xwo";

// useStates.................................
  const [inputData, setInputData] = useState("")
  const [results, setResults] = useState([])
  const [page, setPage] = useState(1)
  const [showMore, setShowMore] = useState(false)
  // console.log(inputData)



  // function.....................................

// useEffect(()=>{
 


//   searchImages()
// },[inputData])
const searchImages = async()=>{
  const url = `https://api.unsplash.com/search/photos/?page=${page}&query=${inputData}&client_id=${key}`;
  // const url = `https://api.unsplash.com/photos/?client_id=${key}`;

  try {
    const response=await fetch(url)
    const data = await response.json()
    const newResults = data.results
   console.log(data)  

   if(page===1){
    setResults(newResults)
   }else{
    setResults((prevResults)=>[...prevResults,...newResults])
   }
    setPage(page + 1)
    setShowMore(page>1)
    setInputData("")
  } catch (error) {
    console.log("Error fetching data:", error);


  }


  
}
  
 
const handleShowMore = ()=>{
  searchImages()
}




  const handleSubmit=(e)=>{

    e.preventDefault()
    // setPage(1)
    console.log("click")
    searchImages()

    
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

     <div className="search-results">
        {results.map((result) => (
          // <div className='row'>
          <div className="col" key={result.id}>
            <img src={result.urls.small} alt={result.alt_description} />
            <h4>
              <a href={result.links.html} target="_blank" rel="noopener noreferrer">
                {result.alt_description}
              </a>
            </h4>
          </div>

          // {/* </div> */}

        ))}
      </div>

      {showMore && (<button id='show-more-btn' onClick={handleShowMore}>
        ShowMore
      </button>)}

    </div>
  )
}

export default Unsplash