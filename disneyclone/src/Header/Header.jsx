import React from 'react'
import './Header.scss'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { sliderData } from '../DataSource';

const Header = () => {
    return (
        <div className='slider'>

            <Carousel
                // ye sab props hamen carousal k web se milen hen
                showThumbs={false}
                autoPlay={true}
                transitionTime={1}
                infiniteLoop={true}
                showStatus={false}
            >
                {sliderData.map((item) => (
                    <div key={item.id} className='slider__data'>
                        <div className='slider__images-info'>
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                        </div>

                        <div className='slider__images-single'>
                            <img src={item.image} alt={item.title} />

                        </div>


                    </div>

                ))}
            </Carousel>

        </div>
    )
}

export default Header