// import React from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { increase ,decrease} from '../../Redux/counterSlice'

// export default function Products(props) {
//   let {counter} = useSelector((state)=> state.counter);
//  let dispatch = useDispatch()
//   return <>
  
//   <h2> counter :{counter}</h2>
//   <button onClick={()=> dispatch(increase())} className='btn btn-info'>increse</button>
//   <button onClick={()=> dispatch(decrease())} className='btn ms-2 btn-info'>decrease</button>
  
  
//   </>
// }




import axios from 'axios'
import { useContext } from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { cartContext } from '../../Context/CartContext';
import toast, { Toaster } from 'react-hot-toast';
import { Oval } from 'react-loader-spinner'

export default function Featuredproduct() {
  let {addToCart ,setCartCount} = useContext(cartContext)

  async function addProduct(productId) 
  {
    let {data} = await addToCart(productId)
    console.log(data);
    if (data.status==="success") {
      setCartCount(data.numOfCartItems)
      toast('✔ Your Product Add To Card 🛺')
    }
  }
  function getFeaturedproduct () {
    return axios.get(`https://ecommerce.routemisr.com/api/v1/products`)
  }
    let {isLoading ,isError ,data ,isFetching } = useQuery('featuerProduct',getFeaturedproduct ,{
      cacheTime:200,
      // refetchOnMount:false,
      // staleTime : 2000
      refetchInterval:2000

    })
    // const [prouduct, setProuduct] = useState([]).....


  return <>

  {isLoading?<div className='spin'>
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
</div>:   <div className=' container py-2'>
<Toaster/>
    <div className="row g-5">
      
      {data?.data.data.map((item)=>   
        <div key={item.id} className="col-md-3">
        <div className='product cursor-pointer py-3 px-2'>
          <Link to={`/productdetails/${item.id}`}>
          <img src={item.imageCover} className=' w-100' alt={item.title} />

          <span className=' text-main font-sm fw-bolder '>{item.category.name}</span>
          <h3 className='h6'>{item.title.split(' ').slice(0,2).join(' ')}</h3>
          <div className='d-flex mt-3 justify-content-between'>
            <span>{item.price} EGP</span>
            <span><i className='fas fa-star rating-color'></i> {item.ratingsAverage}</span>
            <div className='text-end'><i className='fas fa-heart fa-xl '></i></div>
          </div>
        </Link>
        <div className='d-flex justify-content-center'>
        <button onClick={()=>addProduct(item.id)} className='btn  bg-main text-white btn-sm w-75 mt-2'>+ add </button>

            </div>
        </div>


      </div>)}

    </div>
  </div>
   }




  
  
  </>
}



