import { useFormik } from 'formik'
import React, { useContext } from 'react'
import { cartContext  } from '../../Context/CartContext'

export default function Checkout() {
  let {onlinePayment , cartId}= useContext(cartContext)
  async function handelCheckSubmit(values) {
    let response = await onlinePayment(cartId , 'http://localhost:3000', values);
    console.log(response?.data.session.url);
    window.location.href = response?.data.session.url ;
  }
  let formik = useFormik({
    initialValues:{
      ditails:'',
      phone:'',
      city:''
    },
    onSubmit:handelCheckSubmit
  })

  // async function getpayment(id , shippingAddress){
  //   let {data} = await payment(id , shippingAddress)
  //   console.log(data);
  //   if (data.status==='success') {
  //     // data.session.url
  //     window.location.href=data.session.url
  //   }
  // }
  return <>
  <div className="ms-1">
  <form onSubmit={formik.handleSubmit}>
    <label className='mt-2' htmlFor="ditails">ditails</label>
    <input value={formik.values.ditails} onBlur={formik.handleBlur} onChange={formik.handleChange} type="text" className='form-control mb-2 w-100' name='ditails' id='ditails' />

    <label className='mt-2' htmlFor="phone">phone</label>
    <input value={formik.values.ditails} onBlur={formik.handleBlur} onChange={formik.handleChange} type="tel" className='form-control mb-2 w-100' name='phone' id='phone' />


    <label className='mt-2' htmlFor="City">City</label>
    <input value={formik.values.ditails} onBlur={formik.handleBlur} onChange={formik.handleChange} type="text" className='form-control mb-2 w-100' name='City' id='City' />

<button type='submit' className='btn btn-outline-info w-100 m-1 mt-2'>pay</button>

  </form>
  </div>
    
    </>
}
