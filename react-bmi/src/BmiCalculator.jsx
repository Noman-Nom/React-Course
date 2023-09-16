import React from 'react'
import { useState } from 'react'
import  './BmiCalculator.css'

const BmiCalculator = () => {
    const [height, setHeight] = useState('')
    const [weight, setWeight] = useState('')
    const [result, setResult] = useState(null)

    // console.log(height)
    // console.log(weight)

    const handleSubmit = (e)=>{
        e.preventDefault();
        if (height === '' || isNaN(height) || height <= 0) {
            alert('Invalid height');
          } else if (weight === '' || isNaN(weight) || weight <= 0) {
            alert('Invalid weight');
          } else {
            const bmi = (weight / ((height * height) / 10000)).toFixed(2);
            setResult(bmi);
          }
    }


    return (
        <div className='app'>
                <form className='form' onSubmit={handleSubmit}>
            <h1>BMI-CALCULATOR IN REACT JS</h1>
            <div>
                <label>Height in: CM</label>
                <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} />
            </div>
            <div>
                <label>Weight in: KG</label>
                <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} />
            </div>
                    <button type="submit">Calculate BMI</button>

            </form>
    
            <div>
                <h3>Your BMI:</h3>
                <p>{result}</p>
            </div>


        </div>
    )
}

export default BmiCalculator