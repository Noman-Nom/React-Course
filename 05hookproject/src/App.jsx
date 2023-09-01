import { useCallback, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'

function App() {

  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [characterAllowed, setCharacterAllowed] = useState(false)
  const [password, setPassword] = useState("")


  const passwordGenerator = useCallback(()=>{

    let pass = ""
    let str= "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) {
      str +="1234567890"
    }
    if (characterAllowed) {
      str +="!@#$%^&*-_+=[]{}~`"
    }
    for (let i = 0; i <= array.length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      
      pass = str.charAt(char)
    }

    setPassword(pass)
   
  }
  
  
  
  ,[length,numberAllowed,characterAllowed,password])

  return (
    <div>
     
      <h1 className='text-4xl text-center text-white mt-10 '>Password Generator</h1>

    </div>
  )
}

export default App
