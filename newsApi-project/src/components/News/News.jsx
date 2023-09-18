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
        <div className='News'>
            {
                newsData.map((article,index)=>(

                    <div key={index} className="card" style={{ width: '18rem' }}>
                    <img src={article.urlToImage?article.urlToImage:"https://bnr-external-prod.imgix.net/UPnQ0q4urJLhYo-6k_LrvnuCV48.jpg?q=45&w=1500&auto=format,compress"} className="card-img-top" alt="no imge" />
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">
                      {article.description && article.description.length > 50
          ? `${article.description.substring(0, 50)}...` // Truncate to 100 characters
          : article.description}
                      </p>
                      <a href="#" className="btn btn-primary">
                        {article.author}
                      </a>
                    </div>
                  </div>

                    


                ))
            }

            
        </div>
    )
}

export default News