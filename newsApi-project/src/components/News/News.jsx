import React, { useEffect } from 'react'
import { useState } from 'react'
import './News.css'

const News = () => {
    //  variables 
    const ApiKey = 'bcd2aeba084a4b89b74f151b9d2bd920';
    const catogery = "general"
  


    // .........use states.....
    const [newsData, setNewsData] = useState([])


    //  functions .............

    useEffect(() => {
        const searchNews = async () => {
            try {
             
                const response = await fetch(`https://newsapi.org/v2/everything?q=tesla&from=2023-08-18&sortBy=publishedAt&catogery=${catogery}&apiKey=${ApiKey}`)
                const data = await response.json()
                setNewsData(data.articles)
                console.log(data)
            } catch (error) {
                console.log(error)
            }
        }
        searchNews()
    }, [])
    return (
        <div>News</div>
    )
}

export default News