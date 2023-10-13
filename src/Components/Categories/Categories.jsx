import React, { useEffect } from 'react'
import style from './Categories.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { getCategories } from '../../Redux/categoriesSlice'
import { Oval } from 'react-loader-spinner'




export default function Categories() {

  let {categories , isError , loading }= useSelector((state) => state.categories )
  let dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getCategories())
  }, [])


  return <>
      {loading?
      <div className='loading spin'>
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
      </div>
      : <div className="row g-5">
        {categories.map((category)=>           <div className="col-md-4">
            <div className="categories py-3  product">
              <img  className='w-100' src={category.image} alt="" />
              <h4 className='text-center text-main'>{category.name}</h4>
            </div>
          </div>)}

      </div> 
      }
  
  
  
  </>
}
