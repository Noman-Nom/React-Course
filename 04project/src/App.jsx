import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  const [color, setColor] = useState("black")

  return (

  

    <div className='btns' style={{backgroundColor: color}} >

  
   <button onClick={()=> setColor("black") } type="button" className="btn btn-dark  text-white">Dark</button>
   <button onClick={()=> setColor("blue") } type="button" className="btn btn-primary text-white">Blue</button>
   <button onClick={()=> setColor("green") } type="button" className="btn btn-success text-white">Green</button>
   <button onClick={()=> setColor("red") } type="button" className="btn btn-danger text-white">Red</button>

    </div>

   
    
  )
}

export default App
