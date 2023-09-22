import React from "react"
import { ThemeProvider } from "./Contexts/Theme"


function App() {


  return (
    

    <ThemeProvider value={{themeMode,darkMode,lightMode}}  >
<div className="flex flex-wrap min-h-screen items-center">
    <div className="w-full">
        <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            
        </div>

        <div className="w-full max-w-sm mx-auto">
            
        </div>
    </div>
</div>
</ThemeProvider>
  )
}

export default App
