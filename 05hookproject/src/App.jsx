import { useCallback, useEffect, useState , useRef } from 'react'

// import './App.css'

function App() {

  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [characterAllowed, setCharacterAllowed] = useState(false)
  const [password, setPassword] = useState("")


// useRef hook
const passwordRef = useRef(null)

  const passwordGenerator = useCallback(()=>{

    let pass = ""
    let str= "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) {
      str +="1234567890"
    }
    if (characterAllowed) {
      str +="!@#$%^&*-_+=[]{}~`"
    }
    for (let i = 0; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      
      pass  += str.charAt(char)
    }

    setPassword(pass)
   
  }
  
  
  
  ,[length,numberAllowed,characterAllowed,password])

  const copypasswordToClipboard = useCallback(()=>{

    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,9)
    window.navigator.clipboard.writeText(password)
  },[password])
useEffect(()=>{

  passwordGenerator()
}

,[length,numberAllowed,characterAllowed,setPassword])

  return (
    
 <div>
  <h1>Password generator </h1>

  <div>
    <input type="text" 
      value={password}
      placeholder='password'
      readOnly
      ref={passwordRef}
    />
    <button onClick={copypasswordToClipboard}>Copy</button>

  </div>

  <div>
    <div>
      <input type="range"
      min={8} 
      max={100}
      value={length}
      className='cursor-pointer'
      onChange={(e)=>{setLength(e.target.value)}}
      />
      <label htmlFor="">length: {length}</label>
    </div>

    <div>
      <input type="checkbox"
      defaultChecked={numberAllowed}
    onChange={()=>{setNumberAllowed((prev)=>!prev)}}
      />
      <label htmlFor="">Numbers</label>

      <input type="checkbox"
      defaultChecked={characterAllowed}
    onChange={()=>{setCharacterAllowed((prev)=>!prev)}}
      />
      <label htmlFor="">Character</label>
    </div>
  </div>
 </div>


  )
}

export default App
