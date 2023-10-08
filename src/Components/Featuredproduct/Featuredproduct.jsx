import axios from 'axios'
import { useContext } from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { cartContext } from '../../Context/CartContext';

export default function Featuredproduct() {
  let {addToCart} = useContext(cartContext)

  async function addProduct(productId) 
  {
    let res = await addToCart(productId)
    console.log(res);
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
<i className='fas fa-spinner fa-spin'></i>
</div>:   <div className=' container py-2'>
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











  // const [prouduct, setProuduct] = useState([])
  // const [isLoading, setIsLoading] = useState(false)
  
  
  
  // async function getFeaturedproduct() {
  //   setIsLoading(true)
  //   let {data} = await axios.get(`https://ecommerce.routemisr.com/api/v1/products`)
  //   setProuduct(data.data)
  //   setIsLoading(false)
  // }
  // useEffect(()=>{
  //   getFeaturedproduct()
  // }, [])