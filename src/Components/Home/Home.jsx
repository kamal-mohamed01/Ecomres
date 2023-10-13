import React from 'react'
import Featuredproduct from '../Featuredproduct/Featuredproduct'
import CategorySlider from '../CategorySlider/CategorySlider'
import MainSlider from '../MainSlider/MainSlider'
import { Helmet } from 'react-helmet'
import Style from "./Home.module.css"



export default function Home() { 
  
  
  
  
  return <>
    <Helmet>
                <meta charSet="utf-8" />
                <title>Fresh Cart Home</title>
            </Helmet>
  <MainSlider/>
  <CategorySlider/>
  <Featuredproduct/>
  </>
}
