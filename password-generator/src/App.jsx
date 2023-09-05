import { useCallback, useState, useEffect } from 'react'

import './App.css'

function App() {

const [length, setLength] = useState(4)
const [numberAllowed, setNumberAllowed] = useState(false)
const [characterAllowed, setCharacterAllowed] = useState(false)
const [password, setPassword] = useState("")


// usecallback

const passwordGenerator= useCallback(()=>{

  let pass = ""
  let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  if(numberAllowed){
      str += "1234567890"
    
  }
  
  if(characterAllowed){
      str += "!@#$%^&*-_+=[]{}~`"
    
  }
  for (let i = 0; i<=length; i++){

    let char = Math.floor(Math.random()* str.length + 1)

    pass  += str.charAt(char)
  }

  setPassword(pass)
  


},[length,characterAllowed,numberAllowed,password])

useEffect(()=>{

  passwordGenerator()
}

,[length,numberAllowed,characterAllowed,setPassword])

  return (
    <div className="hero">
    <div className="content">
      <h1>
        PASSWORD <span>GENERATOR</span>
      </h1>
      <div className="form">
        <input type="text" 
        value={password}
        placeholder="Your password" readOnly />
        <button className="btn">Copy</button>
      </div>

      <div className="rules">
        <div className="items">
          <input
          
          min={4}
          max={15}
          value={length}
          type="range"
          
          onChange={(e)=>{setLength(e.target.value)}}/>
          <label>Length{length}</label>
        </div>

        <div className="items">
          <input className="checks" type="checkbox" />
          <label>Numbers</label>
        </div>

        <div className="items">
          <input className="checks" type="checkbox" />
          <label>Characters</label>
        </div>
      </div>
    </div>
  </div>
  )
}

export default App
