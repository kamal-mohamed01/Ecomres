import React, { useState } from 'react'
import { Formik, useFormik } from 'formik'
import * as Yup from "yup"
import axios from 'axios'
import {  useNavigate } from 'react-router-dom'


export default function Forget() {
    let navigate = useNavigate();
    const [error, seterror] = useState(null);
    const [isLoading, setisLoading] = useState(false);

  async function forgetSubmit(values) {
    setisLoading(true);
    let {data} = await axios.post(`https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords`,values)


    .catch(
        (err)=>{
        setisLoading(false)
        seterror(err.response.data.message)
        seterror(err.response.data.errors.msg);
      }
    )
    if (data.statusMsg === 'success') {
      setisLoading(false)
      navigate("/verify")
    }
  }

  let validateScheme = Yup.object({
    email : Yup.string().email(`email pattern is inavalid`).required(`email is required`),
    
  })


  let formik = useFormik({
    initialValues:{
      email:"",

    },validationSchema:validateScheme,
    onSubmit:forgetSubmit
})

return <>
    <div className=' ms-1 '>
    <h3 className='mt-1 fw-2 pt-2 h3'>please enter your verification code</h3>
    {error? <div className="alert alert-danger p-4 mt-3">{error}</div>:''}
    


    <form onSubmit={formik.handleSubmit}>


    <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.email} className='form-control text-dark p-3 mb-2 w-100' placeholder='Email' id='email' name='email' type="text" />
    {formik.errors.email && formik.touched.email? <div className=' text-danger alert p-3 mt-2 alert-danger'>{formik.errors.email}</div>:""}


    {isLoading?<div className='spin'>
<i className='fas fa-spinner fa-spin'></i>
</div>:<>
<div className=' d-flex  align-items-center '>

<button  type='submit' className='btn me-auto trans  btn-lg  mb-4 mt-3'>verify</button>


</div></>
}
</form>
</div>
</>
}


