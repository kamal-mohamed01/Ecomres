import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'


export default function Layout() {
  return <>

  <div className='fixed-top z-3 '>
  <Navbar/>  
  </div>


<div className=' my-5 py-5  container'>

<Outlet></Outlet>

  
</div>

  </>
}
