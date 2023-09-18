import { useState } from 'react'

import './App.css'
import News from './components/News/News'
import Navbar from './components/Navbar/Navbar'
import Pagination from './components/Pagination/Pagination'

{/* https://newsapi.org/v2/everything?q=tesla&from=2023-08-18&sortBy=publishedAt&catogery=general&apiKey=bcd2aeba084a4b89b74f151b9d2bd920 */}
function App() {
  

  return (
 <div>
    
      <Navbar/>
      <News/>
      <Pagination/>
   
 </div>
  )
}

export default App
