import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

let counter = 0;

const updateCounter =()=>{
  // console.log("clicked")
  // console.log("Clicked" , Math.random())

  counter = counter +1 ;
  console.log("Updated", counter)

  // yahan par actual men counter update to ho rah he consol mn show bgi kar rha he par wo ui ko update nhi kar rha he isi wajh se hooks ka concept aya k ap ui ko update kar sakte hen 
}

  return (
    <div className='app'>
     <h1>React Counter</h1>

     <button onClick={updateCounter}>Incriment{counter}</button>
     <button>Decrement{counter}</button>
    </div>
  )
}

export default App
