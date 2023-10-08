import React, { useState } from 'react'
import { Formik, useFormik } from 'formik'
import * as Yup from "yup"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


export default function Register() {
  let navigate = useNavigate();
    const [error, seterror] = useState(null);
    const [isLoading, setisLoading] = useState(false);
  async function regesterSubmit(values) {
    setisLoading(true);
    let {data} = await axios.post(`https://ecommerce.routemisr.com/api/v1/auth/signup`,values)
    .catch(
        (err)=>{
  
        setisLoading(false)
        seterror(err.response.data.message)
        seterror(err.response.data.errors.msg);

      }
      )
    if (data.message === 'success') {
      setisLoading(false)
      navigate("/login")
    }



  }

  // function validate(values) {
  //   let phoneRegex = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/
  //   let emailRegex =   /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i

  //   let errors ={}
  //   if (!values.name) {
  //     errors.name='namr is requerd'
  //   }
  //   else if (values.name.length<3) 
  //   {
  //     errors.name ="name minlength is 3"
  //   }
  //   else if (values.name.length>10) 
  //   {
  //     errors.name ="name maxlength is 10"
  //   }


  //   if (!values.phone) {
  //     errors.phone='phone is requerd'
  //   }
  //   else if (!phoneRegex.test(values.phone)) {
  //     errors.phone = "phone number in vallid"
  //   };

  //   if (!values.email) {
  //     errors.email='email is requerd'
  //   }
  //   else if (!emailRegex.test(values.email)) {
  //     errors.email = "email number in vallid"
  //   };
  //   return errors;
  // }
  let phoneRegex = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/
  let validateScheme = Yup.object({
    name:Yup.string().min(3,`name min length is 3`).max(50,`name max length is 50`).required(`name is required`),
    email : Yup.string().email(`email pattern is inavalid`).required(`email is required`),
    password:Yup.string().matches(/^[A-Za-z][A-Za-z0-9]{5,9}$/ , `must be 
    *1* Start with a letter (either uppercase or lowercase).
    *2* Be between 6 and 9 characters in total.`).required(`password is required`),
    // rePassword: Yup.string().oneOf([Yup.ref(`password`)],`re-Password pattern is inavalid`).required(`re-Password is required`),
    phone:Yup.string().matches(phoneRegex,`invalid Phone`).required(`phone is required`)
  })


  let formik = useFormik({
    initialValues:{
      name:"",
      email:"",
      password:"",
      rePassword:"",
      phone:""

    },validationSchema:validateScheme,
    onSubmit:regesterSubmit
  })
  
  return (

    <div className=' p-2 container '>
      <h3 className=' container fw-bolder font-l '>regester Now</h3>


      {error? <div className="alert alert-danger  mt-3">{error}</div>:''}
      


    <form className='ms-2' onSubmit={formik.handleSubmit}>
      <label className='mt-1' htmlFor="name" >Name :</label>
      <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.name} className='form-control mb-2 w-100' id='name' name='name' type="text" />
      {formik.errors.name && formik.touched.name ?<div className=' text-danger alert p-2 mt-2 alert-danger'>{formik.errors.name}</div>:""}
      


      <label className='mt-1' htmlFor="email" >Email :</label>
      <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.email} className='form-control mb-2 w-100' id='email' name='email' type="text" />
      {formik.errors.email && formik.touched.email? <div className=' text-danger alert p-2 mt-2 alert-danger'>{formik.errors.email}</div>:""}

      

      <label className='mt-1'  htmlFor="password " >Password :</label>
      <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.password} className='form-control mb-2 w-100' id='password' name='password' type="password" />
      {formik.errors.password && formik.touched.password? <div className=' text-danger alert p-2 mt-2 alert-danger'>{formik.errors.password}</div>:""}

      <label className='mt-1'  htmlFor="rePassword" >rePassword:</label>
      <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.rePassword} className='form-control mb-2 w-100' id='rePassword' name='rePassword' type="Password" />
      {formik.errors.rePassword && formik.touched.rePassword? <div className=' text-danger alert p-2 mt-2 alert-danger'>{formik.errors.rePassword}</div>:""}

      <label className='mt-1' htmlFor="phone" >Phone :</label>
      <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.phone} className='form-control mb-2 w-100' id='phone' name='phone' type="tel" />
      {formik.errors.phone && formik.touched.phone? <div className=' text-danger alert p-2 mt-2 alert-danger'>{formik.errors.phone}</div>:""}

      {isLoading?<div className='spin'>
<i className='fas fa-spinner fa-spin'></i>
</div>:<div className=' d-flex  '>
<button disabled={!(formik.isValid&&formik.dirty)} type='submit' className='btn ms-auto bg-main btnreg-reg fw-bolder btn-lg text-white  mb-4 mt-3'>Regester now</button>
</div>
}





    </form>
    </div>
  )
}




