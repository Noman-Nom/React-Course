import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card'

function App() {


  return (
    <div className='app'>

      {/* <h1 className='bg-green-400 text-black p-4 rounded-xl'>Tailwan Test</h1> */}
     <Card Name = 'Momna' btnText='vsit Site' Desc='ajdfj jksl jlahdjash '/>
     <Card Name = 'Adeeba' btnText='vsit Site' Desc='She is Good Girl '/>
     <Card Name = 'waqasi' btnText='vsit Site' Desc='kali larki '/>
    </div>
  )
}

export default App
