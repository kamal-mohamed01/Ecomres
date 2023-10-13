import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from "../../assets/images/freshcart-logo.svg"
import { useContext } from 'react'
import { UserContext } from '../../Context/UserContext'
import { cartContext } from '../../Context/CartContext'



export default function Navbar() {
  const {cartCount} = useContext(cartContext)

  let {userToken,setUserToken} = useContext(UserContext)
  let navigate = useNavigate()
  
  function logOut() {
    localStorage.removeItem('userToken');
    setUserToken(null);
    navigate('/login')
}

  return <>
  <nav className="navbar    navbar-expand-lg bg-body-tertiary">
  <div className=" container">
    <Link className="navbar-brand" to="">
      <img src={logo} alt="fresh market logo" />
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button> 
    <div className="collapse navbar-collapse " id="navbarSupportedContent">
      <ul className="navbar-nav m-auto me-0 mb-2 mb-lg-0">


          {userToken !== null ?<>
      <li className="nav-item ">
          <Link className="nav-link" to="/">Home</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/cart">Cart</Link>
        </li>



        <li className="nav-item">
          <Link className="nav-link" to="/products">Products</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/categories">Categories</Link>
        </li>


        <li className="nav-item">
          <Link className="nav-link" to="/brands">Brands</Link>
        </li>
      </>:''}
      </ul>



      <ul className="navbar-nav ms-auto  mb-2 mb-lg-0">



        {userToken !==null?<>

        <div className="nav-item d-flex align-items-center">
          <span className='count rounded-2'>
            
            
            {cartCount}
            
            </span>

          <li ><Link to="/cart">
            <i className=' fa-xl text-dark  mx-2 fa-solid fa-cart-shopping'>    
              </i>
              </Link></li>
          </div>


        <li className="nav-item">
          <span className="nav-link cursor-pointer" onClick={()=>logOut()} to={'/login'} >Log out</span>
        </li>
        </>:<>
        

        <li className="nav-item">
          <Link className="nav-link" to="/login">Log in</Link>
        </li>


        <li className="nav-item">
          <Link className="nav-link" to="/register">Register</Link>
        </li>
        </>}
      </ul>

    </div>
  </div>
</nav>
  
  
  </>
}
