import React from 'react'
import { useState } from 'react'


const Convertor = () => {
    const [celsius, setCelsius] = useState(0)
    const [fahrenheit, setFahrenheit] = useState(32)

        const convertToFahrenheit = (celsius)=>(celsius * 9/5) + 32;
        const convertToCelsius = (fahrenheit)=>(fahrenheit - 32) * 5/9;

        const handleFahrenheitChange= (e)=>{
                const value = e.target.value
                setFahrenheit(value)
                setCelsius(convertToCelsius(value).toFixed(4))

        }
        const handleCelsiusChange= (e)=>{
                const value = e.target.value
                setCelsius(value)
                setFahrenheit(convertToFahrenheit(value).toFixed(4))

        }

  return (
    <div>
    <h1>Temperature Converter</h1>
    <div>
      <label>Fahrenheit: </label>
      <input
        type="number"
        value={fahrenheit}
        onChange={handleFahrenheitChange}
      />
    </div>
    <div>
      <label>Celsius: </label>
      <input
        type="number"
        value={celsius}
        onChange={handleCelsiusChange}
      />
    </div>
  </div>
  )
}

export default Convertor