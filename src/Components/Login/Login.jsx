import React, { useState } from 'react'
import { Formik, useFormik } from 'formik'
import * as Yup from "yup"
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { UserContext } from '../../Context/UserContext'


export default function Login() {
  let {setUserToken} = useContext(UserContext)
    let navigate = useNavigate();
    const [error, seterror] = useState(null);
    const [isLoading, setisLoading] = useState(false);

  async function loginSubmit(values) {
    setisLoading(true);
    let {data} = await axios.post(`https://ecommerce.routemisr.com/api/v1/auth/signin`,values)


    .catch(
        (err)=>{
        setisLoading(false)
        seterror(err.response.data.message)
        seterror(err.response.data.errors.msg);
      }
    )
    if (data.message === 'success') {
      setisLoading(false)
      localStorage.setItem('userToken',data.token)
      setUserToken(data.token)
      navigate("/")
    }
  }

  let validateScheme = Yup.object({
    email : Yup.string().email(`email pattern is inavalid`).required(`email is required`),
    password:Yup.string().matches(/^[A-Za-z][A-Za-z0-9]{5,9}$/ , `must be 
    *1* Start with a letter (either uppercase or lowercase).
    *2* Be between 6 and 9 characters in total.`).required(`password is required`),
  })


  let formik = useFormik({
    initialValues:{
      email:"",
      password:"",
    },validationSchema:validateScheme,
    onSubmit:loginSubmit
  })
  
  return <>
    <div className=' container ps-4 p-2 m-2 '>
      <h3 className=' fw-bolder '>Login Now</h3>
      {error? <div className="alert alert-danger p-3 mt-3">{error}</div>:''}
      


    <form onSubmit={formik.handleSubmit}>


      <label className='mt-2 fs12 fw-bolder ' htmlFor="email" >Email :</label>
      <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.email}  className='form-control  mb-2 w-100' id='email' name='email' type="text" />
      {formik.errors.email && formik.touched.email? <div className=' text-danger alert p-3 mt-2 alert-danger'>{formik.errors.email}</div>:""}

      
      <label className='mt-2 fs12 fw-bolder '  htmlFor="password " >Password :</label>
      <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.password} className='form-control  mb-2 w-100' id='password' name='password' type="password" />
      {formik.errors.password && formik.touched.password? <div className=' text-danger alert p-3 mt-2 alert-danger'>{formik.errors.password}</div>:""}





      {isLoading?<div className='spin'>
<i className='fas fa-spinner fa-spin'></i>
</div>:<>
<div className=' d-flex  align-items-center '>
<Link to={"/forgetpassword"} className='fw-5 '>forget your password ?</Link>

<button disabled={!(formik.isValid&&formik.dirty)} type='submit' className='btn ms-auto bg-main btnreg fw-bolder btn-lg text-white  mb-4 mt-3'>Login now</button>
{/* <Link className='btn' to={`/register`}>Register now</Link> */}

</div></>
}





    </form>
    </div>
    </>
}




