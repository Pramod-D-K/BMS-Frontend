
import React from 'react';
import SliderImport from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './BannerSlider.css';
import { banners } from '../../utils/constants';

const Slider = SliderImport.default ?? SliderImport;


const BannerSlider = () => {

//     const settings = {
//         centerMode:true,
//         centerPadding:true,
//         autoplay:true,
//         autoplaySpeed:1000,
//         arrows:true,
//         dots: true,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//   };
const settings = {
  centerMode: true,
  centerPadding:'10%',
  autoplay: true,
  autoplaySpeed: 1000,
  arrows: true,
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};
  return (
    <div className='slider-container' >
        <div className='inner-container' > 
           <Slider {...settings}>
                {banners.map((banner, i) => (
                    <div className="banner-container" key={i}>
                        <img
                        className="image-container"
                        src={banner}
                        alt={`banner-${i}`}
                        />
                    </div>
  ))}
</Slider>
        </div>
    </div>
  )
}

export default BannerSlider