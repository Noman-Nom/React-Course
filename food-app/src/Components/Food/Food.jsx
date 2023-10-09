import React, { useEffect } from 'react'
import { useState } from 'react'
import './Food.css'

const Food = () => {
    // use states.......................................
    const [data, setData] = useState([])
    const [inputData, setInputData] = useState('')

    // use effects......................................
    useEffect(() => {

        
        getStaticData()
        // getData()
     
        
       
    }, [])




    // functions.....................................

    const getStaticData = async () => {
        // static data 
        const url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=egg`
        const response = await fetch(url)
        const data = await response.json()

        setData(data.meals)

    }


    const getData = async () => {
        const url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${inputData}`
        const response = await fetch(url)
        const data = await response.json()
        //  console.log(data)
        setData(data.meals)
        // console.log(data.meals)

    }

    const handleClick = () => {
        // console.log(inputData)
        getData()
        setInputData('')
    }


    return (
        <div className="container">

            <div className="input-box">
                <input type="text" value={inputData} onChange={(e) => setInputData(e.target.value)} />
                <button onClick={handleClick}>Search</button>
            </div>
            <div className="food-container">
                <h2>Your Search Food:</h2>

                <div className="row" >
                    {
                        data.map((meal) => (

                            <div className="col" key={meal.idMeal
                            }  >
                                <img src={meal.strMealThumb} alt="" />
                                <h4>{meal.strMeal}</h4>
                                <a href="#">{meal.strMeal}</a>
                            </div>

                        ))
                    }
                </div>

            </div>

        </div>

    )
}

export default Food