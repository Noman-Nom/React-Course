import { useState } from 'react'
import UserContextProvider from './Context/UserContextProvider'


function App() {


  return (
    <UserContextProvider>
     <h1>New project | Context Api</h1>
    </UserContextProvider>
  )
}

export default App
