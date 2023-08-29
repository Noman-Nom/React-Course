import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

// let counter = 0;  q k ab hum state ki madad se update karenge 

let [counter, setCounter] = useState(0)

const incrimentCounter =()=>{
  // console.log("clicked")
  // console.log("Clicked" , Math.random())

  // counter = counter +1 ;
  // console.log("Updated", counter)


  
  // yahan par actual men counter update to ho rah he consol mn show bgi kar rha he par wo ui ko update nhi kar rha he isi wajh se hooks ka concept aya k ap ui ko update kar sakte hen 

  setCounter(counter + 1)
}

const decrimentCounter = ()=>{
  setCounter(counter-1)
}

  return (
    <div className='app'>
     <h1>React Counter</h1>

     <button onClick={incrimentCounter}>Incriment</button>
     <h2>{counter}</h2>
     <button onClick={decrimentCounter}>Decrement</button>
    </div>
  )
}

export default App
