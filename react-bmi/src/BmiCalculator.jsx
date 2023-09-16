import React from 'react'
import { useState } from 'react'
import  './BmiCalculator.css'

const BmiCalculator = () => {
    const [height, setHeight] = useState('')
    const [weight, setWeight] = useState('')
    const [weightUnit, setWeightUnit] = useState('kg')
    const [heightUnit, setHeightUnit] = useState('cm')
    const [result, setResult] = useState(null)

    // console.log(height)
    // console.log(weight)

    // console.log(weightUnit)
    // console.log(heightUnit)

    const handleSubmit = (e)=>{
        e.preventDefault();
        if(height==="" || height<=0 || isNaN(height) ||weight==="" || weight<=0 || isNaN(weight)){
            alert('invalid input')
        }
        else{
            let heightInMeter = height;
            let weightInKg  = weight;
                    
        // Convert height and weight to standard units (cm and kg)

        if(heightUnit==="feet"){
            heightInMeter = height * 30.48;
        }
        if(weightUnit==="lb"){
            weightInKg = weight * 0.453592;
        }
        const bmi = (weightInKg / ((heightInMeter / 100) ** 2)).toFixed(2);
        // console.log(bmi)

        setResult(bmi)
        }
   
    }


    return (
        <div className='app'>
                <form className='form' onSubmit={handleSubmit}>
            <h1>BMI-CALCULATOR IN REACT JS</h1>
            <div className='form__fields'>
                <label>Height in: CM or Ft</label>
                <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} />
                <select name="" id="heightUnit" value={heightUnit} onChange={(e)=>(setHeightUnit(e.target.value))}>
                    <option value="cm">CM</option>
                    <option value="feet">Feet</option>
                </select>
            </div>
            <div className='form__fields'>
                <label>Weight in: KG or Lb</label>
                <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} />
                <select name="" id="weightUnit" value={weightUnit} onChange={(e)=>(setWeightUnit(e.target.value))}>
                    <option value="kg">KG</option>
                    <option value="lb">LB</option>
                </select>
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