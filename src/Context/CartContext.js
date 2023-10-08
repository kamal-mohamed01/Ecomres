import axios from "axios";
import { createContext } from "react";



export let cartContext = createContext()

export default function CartContextProvider(props) {

    let heder = {
        token:localStorage.getItem('userToken')
    }

    function addToCart(xId) {
        return  axios.post(`https://ecommerce.routemisr.com/api/v1/cart`,{
            productId:xId
        },{
            headers:heder
        }).then((response)=>response)
        .catch((error)=>error)
    }



    return <cartContext.Provider value={{addToCart}}>
        {props.children}
    </cartContext.Provider>
    
}