import React, { useContext, useEffect, useState } from 'react'
import { cartContext } from '../../Context/CartContext'
import { Oval } from 'react-loader-spinner'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

export default function Cart() {

  let {getCartProduct, removeCartItem ,updateProductQuantity ,setCartCount} =useContext(cartContext)
const [cartData,setCartData]=useState(null)

async function updateCount(id , count) {
 let {data} = await updateProductQuantity(id , count);
//  console.log(count);
 setCartData(data);

}


async function removeItem(id) 
{
  let {data} = await removeCartItem(id);
  setCartData(data);
  setCartCount(data.numOfCartItems)

}

  async function getCartData() {
    let {data}= await getCartProduct()
    console.log(data);
    setCartData(data);
    
  }

  useEffect(() => {
    getCartData();
  }, []);

  return<>
      <Helmet>
                <meta charSet="utf-8" />
                <title>Cart Shop</title>
            </Helmet>
  {cartData ?<div className='py-5 my-5 p-5 bg-light rounded'>
      <div className='d-flex justify-content-between mb-3'>
      <h3>Cart Shop</h3>
      {/* <h3>Cart Shop:{cartData.data._id}</h3> */}

      {/* {console.log(cartData)} */}

      <Link to='/checkout' className='btn btn-primary btn-lg ng-star-inserted'>
        <span className='text-decoration-none text-white'>check out</span>
        </Link>
      </div>
      <div className='d-flex justify-content-between align-items-center ng-star-inserted'>
      <h5>total price : <span className='text-maing'>{cartData.data.totalCartPrice}</span> </h5>
      <h5>total number of items : <span className='text-maing'>{cartData.numOfCartItems}</span> </h5>
      </div>



      {cartData.data.products.map((product) => 
        <div key={product.product.id} className="row my-2">
          <div className="col-md-2">
              <img className='w-100' src={product.product.imageCover} alt={product.product.category.name} />
          </div>
          <div className="col-md-10 d-flex  align-items-center justify-content-between">
            <div className='left'>
              <h5>{product.product.title.split(' ').slice(0,3).join(' ')}</h5>
              <h6>{product.price} EGP</h6>
              <button onClick={()=> removeItem(product.product.id)} className="btn btn-sm m-0 p-0 text-danger">
                <i className='fa fa-trash'></i>remove
              </button>
            </div>
            <div className='right'>
              <button onClick={()=> updateCount(product.product.id ,product.count + 1)} className='btn btn-brdr'>+</button>
              <span className='mx-2'>{product.count}</span>
              <button onClick={()=> updateCount(product.product.id ,product.count - 1)} className='btn btn-brdr'>-</button>
            </div>
          </div>
          
        </div>
      )}
    </div> : 
    <section id='loading' className=' spin '>
      
        <Oval
  height={80}
  width={80}
  color="#4fa94d"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
  ariaLabel='oval-loading'
  secondaryColor="#4fa94d"
  strokeWidth={2}
  strokeWidthSecondary={2}

/>


      </section>}

    </>
}

