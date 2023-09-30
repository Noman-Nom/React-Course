import React from 'react'
import { useState } from 'react'

const BgChanger = () => {

    const [bg,setBg ] = useState("black")

    const bgChanger = ()=>{
        const hex = "0123456789ABCDEF"
        let  color = "#"
        for (let i = 0; i <6 ; i++) {
            color += hex[Math.floor(Math.random()*hex.length)]
            
        }
        console.log(color)
        setBg(color)
    }
  return (
    <div style={{
        width:"100%",
        height:"100vh",
        backgroundColor:bg,
        color:"white",
        textAlign:"center"
    }} >

        <h1>Random Background Changer</h1>

        <button onClick={bgChanger}>Click</button>
    </div>
  )
}

export default BgChanger