import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

let counter = 0;

const updateCounter =()=>{
  console.log("clicked")
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
