import React from 'react'
import './Header.scss'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { sliderData } from '../DataSource';

const Header = () => {
  return (
    <div className='slider'>
        {sliderData.map((item)=>(
            <div>
                <img src={item.image} alt={item.title} />
                
            </div>

        ))}

    </div>
  )
}

export default Header