import React, { useEffect } from "react"
import { useState } from "react"
import { ThemeProvider } from "./Contexts/Theme"
import ThemeBtn from "./components/ThemeBtn"
import Card from "./components/Card"


function App() {

// states........................
const [themeMode, setThemeMode] = useState("light")

useEffect(()=>{
  document.querySelector('html').classList.remove("light","dark")
  document.querySelector('html').classList.add(themeMode)
},[themeMode])

// functions...................... 
const lightMode =()=>{
  setThemeMode("light")

}
const darkMode =()=>{
setThemeMode("dark")
}



  return (
    


    <ThemeProvider value={{themeMode, darkMode,lightMode}}  >
<div className="flex flex-wrap min-h-screen items-center">
    <div className="w-full">
        <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
          <ThemeBtn/>
            
        </div>

        <div className="w-full max-w-sm mx-auto">
          <Card/>
            
        </div>
    </div>
</div>
</ThemeProvider>
  )
}

export default App
