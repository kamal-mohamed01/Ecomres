import axios from 'axios';
import React from 'react'
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom'
export default function ProductDetails() {
  let params = useParams()
  function getProductDetails(id) {
    return axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
  }
let {isLoading ,isError ,data ,isFetching } = useQuery('productDetails',()=>getProductDetails(params.id))

console.log(data?.data.data);
  return <>
    {data?.data.data?
    <div>
      <div className="row py-2 w-90 m-auto align-items-center">
          <div className="col-md-4">
            <img className=' w-100' src={data?.data.data.imageCover} alt={data?.data.data.title} />
          </div>
          <div className="col-md-8">
              <h2 className='h5 fw-bolder'>{data?.data.data.title}</h2>
              <p className='fw-sm'>{data?.data.data.description}</p>
              <div className='d-flex justify-content-between'>
              <h6 className='fw-smp fw-bolder'>{data?.data.data.price} EGP</h6>
                <span className='fw-sm' ><i className='fas fa-star rating-color fw-sm'></i>{data?.data.data.ratingsAverage} </span>
              </div>
              <div className='d-flex justify-content-between align-items-center mt-2'>
              <button className='btn bg-main-btn mx-auto text-white w-75'>+ Add</button>
              <span ><i class="fa-solid fa-heart fa-lg"></i></span>
              </div>

          </div>
        </div>
      </div> : ''}
    </>
}
