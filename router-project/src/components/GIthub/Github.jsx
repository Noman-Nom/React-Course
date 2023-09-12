import { data } from 'autoprefixer'
import React, { useEffect, useState } from 'react'

const Github = () => {
    const [data , setData] = useState([])
  useEffect(()=>{
      fetch('https://api.github.com/users/Noman-Nom')
      .then(response => response.json())
      .then(data=>{
        console.log(data)
        setData(data)
      })
  },[])
  return (
    <div className="text-center m-4 p-4 bg-gray-600 text-white
    text-3xl
    " 
    
    >Github Folowers : {data.followers}
    <img src={data.avatar_url} alt="" width={300} />
    </div>
  )
}

export default Github