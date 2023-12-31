import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import Categories from './Components/Categories/Categories';
import Brands from './Components/Brands/Brands';
import Products from './Components/Products/Products';
import Home from './Components/Home/Home';
import Cart from './Components/Cart/Cart';
import Checkout from './Components/Checkout/Checkout';
import Login from './Components/Login/Login';
import Notfound from './Components/Notfound/Notfound';
import Register from './Components/Register/Register';
import Orders from './Components/Orders/Orders';
import ForgetPassword from './Components/ForgetPassword/ForgetPassword';
import Verify from './Components/Verify Reset Code/Verify';
import  { UserContext } from './Context/UserContext';
import { useContext, useEffect } from 'react';
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute';
import ProductDetails from './Components/productDetails/productDetails';
import CartContextProvider from './Context/CartContext';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Provider } from 'react-redux';
import { store } from './Redux/Store';


let routers = createBrowserRouter([
  {path:"/", element:<Layout/>,children:[
    {index:true,element:<ProtectedRoute><Home/></ProtectedRoute> },
    {path:"login",element:<Login/>},
    {path:"register",element:<Register/>},
    {path:"brands",element:<ProtectedRoute><Brands/></ProtectedRoute>},
    {path:"categories",element:<ProtectedRoute><Categories/></ProtectedRoute>},
    {path:"products",element:<ProtectedRoute><Products/></ProtectedRoute>},
    {path:"productdetails/:id",element:<ProtectedRoute><ProductDetails/></ProtectedRoute>},
    {path:"cart",element:<ProtectedRoute><Cart/></ProtectedRoute>},
    {path:"checkout",element:<ProtectedRoute><Checkout/></ProtectedRoute>},
    {path:"allorders",element:<ProtectedRoute><Orders/></ProtectedRoute>},
    {path:"forgetpassword",element:<ForgetPassword/>},
    {path:"verify",element:<Verify/>},
    {path:"*",element:<Notfound/>},
  ]}
])

function App() {


  let {setUserToken} = useContext(UserContext)

  useEffect(()=>{
    if (localStorage.getItem('userToken') !== null) {
      setUserToken(localStorage.getItem('userToken'))
    }
  },[]);
  

  return <>
      <CartContextProvider>
        <Provider store={store}>
          <RouterProvider router={routers}></RouterProvider>
          </Provider>
      </CartContextProvider>
      </>
  
}

export default App;
