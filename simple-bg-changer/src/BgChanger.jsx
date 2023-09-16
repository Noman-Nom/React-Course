import React from 'react'
import { useState } from 'react'


const BgChanger = () => {
    const [bg, setBg] = useState('#000000')

    const bgHandler = (e)=>{
        const newBgColor = e.target.value
        // console.log(newBgColor)
        setBg(newBgColor)
    }

    
  return (
    <div style={{backgroundColor: bg,
                  width:'100%',
                  height:'100vh',
                  top: 0,
                  left: 0,
                  display: 'flex',
                  flexDirection:"column",
                  alignItems: 'center',
                  justifyContent: 'center',
                  
    }}>
        <h1>Chose your favorite background color</h1>
        <input type="color" value={bg} onChange={bgHandler}  />
        

    </div>
  )
}

export default BgChanger