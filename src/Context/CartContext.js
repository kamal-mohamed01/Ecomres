import axios from "axios";
import { createContext, useEffect, useState } from "react";



export let cartContext = createContext()
let headers = {
    token:localStorage.getItem('userToken')
}

export default function CartContextProvider(props) {
    const [cartCount, setCartCount] = useState(0)
    const [cartId, setCartId] = useState(null)


    async function getCart() {
        let {data} =await getCartProduct()
        setCartId(data?.data._id);
        console.log(data?.data._id);
        }
        useEffect(()=>{
            getCart();
        
    
    }, [])

    async function getCartN() {
        let {data} =await getCartProductN()
        setCartCount(data.numOfCartItems);
        console.log(data.numOfCartItems);
        }
        useEffect(()=>{
            getCartN();
        
    
    }, [])




    function removeCartItem(productId) {
        return axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/${productId}` , {headers})
        .then((response)=>response)
        .catch((error)=>error)
        }
        
        function getCartProduct() {
            return  axios.get(`https://ecommerce.routemisr.com/api/v1/cart`
            ,{
                headers:headers
            })
            .then((response)=>response)
            .catch((err)=>err)
        }
        
        
        function getCartProductN() {
            return  axios.get(`https://ecommerce.routemisr.com/api/v1/cart`
            ,{
                headers:headers
            })
            .then((response)=>response)
            .catch((err)=>err)
        }
        
    
    
    function addToCart(productId) {
        return  axios.post(`https://ecommerce.routemisr.com/api/v1/cart`,{
            productId:productId
        },{
            headers:headers
        }).then((response)=>response)
        .catch((error)=>error)
        
    }
    
    
    
    function updateProductQuantity(productId , count) {
        return axios.put(`https://ecommerce.routemisr.com/api/v1/cart/${productId}` ,
        {count:count} , {headers:headers})
        .then((response)=> response)
        .catch((err) => err)
    }
    
    
    function onlinePayment(cartId ,url, values) {
        return axios.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=${url}`,
        {
            shippingAddress:values
        }, {headers})
        .then((response)=> response)
        .catch((err) => err)
    }
    





       

    return <cartContext.Provider value={{cartId , cartCount, setCartCount , onlinePayment ,addToCart,getCartProduct , removeCartItem , updateProductQuantity}}>
        {props.children}
    </cartContext.Provider>
    
}