import { useState } from 'react'

import './App.css'

function App() {


  return (
    <div className="hero">
    <div className="content">
      <h1>
        PASSWORD <span>GENERATOR</span>
      </h1>
      <div className="form">
        <input type="text" placeholder="Your password" readOnly />
        <button className="btn">Copy</button>
      </div>

      <div className="rules">
        <div className="items">
          <input type="range" />
          <label>Length</label>
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
