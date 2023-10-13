import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Oval } from 'react-loader-spinner'
import { getbrands } from '../../Redux/brandsSlice'


export default function Brands() {
  let {brands , isError , loading }= useSelector((state) => state.brands )
  let dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getbrands())
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
      : <div className="row text-center g-3">
        <h2 className='text-main fw-bolder'>All Brands</h2>
        {brands.map((brand)=>           <div className="col-md-3">
            <div className=" m-auto py-1 px-2 product">
              <img className='w-100' src={brand.image} alt="" />
              <h4 className='text-center text-main'>{brand.name}</h4>
            </div>
          </div>)}

      </div> 
      }
  
  
  
  </>
}
