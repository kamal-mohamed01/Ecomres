import axios from 'axios'
import React from 'react'
import { useQuery } from 'react-query'
import Slider from "react-slick";

export default function CategorySlider() {
  
  
  var settings = {
    dots: false,
    infinite: true,
    autoplay:true,
    speed: 2000,
    slidesToShow: 6,
    slidesToScroll: 5
  };


  function getCategories(params) 
  {
    return axios.get(`https://ecommerce.routemisr.com/api/v1/categories`)
  }

  let {isLoading , isError , data} = useQuery('categorySlide' , getCategories)
  return <>





  {data?.data.data? 
  <div className='py-4'>

<Slider {...settings}>  
  {data?.data.data.map((caetegory)=> <img height={200} key={caetegory._id} src={caetegory.image} className='w-100'/> )}
  </Slider>

  </div>
  
  
  :'' }


  </>
}


















