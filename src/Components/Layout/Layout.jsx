import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import { Offline, Online } from "react-detect-offline";


export default function Layout() {
  return <>

  <div className='fixed-top z-3 '>
  <Navbar/>  
  </div>


<div className=' my-5 py-5  container'>

<Outlet></Outlet>

  
</div>
<div>
    <Offline>
      <div className="network">
        <i className='fas fa-wifi'></i>
          (opps!) your are offline
      </div> 
      </Offline>
  </div>
  </>
}
