import React from 'react'
import SImg1 from '../../assets/images/gutar.jpg'
import SmImg2 from '../../assets/images/bags.jpg'
import slider1 from '../../assets/images/dahab.jpg'
import slider2 from '../../assets/images/smbag.jpg'
import slider3 from '../../assets/images/chair.jpg'
import Slider from "react-slick";

export default function MainSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false
  };

  return <>
<div className="row gx-0 w-50 m-auto">
<div className="col-md-6">
<Slider {...settings}>
          <img height={200} className='w-100' src={slider1} alt="slider1" />
          <img height={350} className='w-100' src={slider2} alt="slider2" />
          <img height={350} className='w-100' src={slider3} alt="slider3" />
    </Slider>
</div>
<div className="col-md-4">
          <img height={175} className='w-100' src={SImg1} alt="imgSlider" />
          <img height={175} className='w-100' src={SmImg2} alt="imgSlider" />
</div>
</div>





  
  </>
  
  

}
