import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Default from './layouts/Default'
import Catagory from './pages/Catagory'
import ProductPage from './pages/ProductPage'
import Subscription from './pages/Subscription'
import Story from './pages/Story'
import Checkout from './pages/Checkout'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'

const router = createBrowserRouter([{
  element: <Default />,
  children : [
    {path: '/', element: <App/>},
    {path: '/catagory', element: <Catagory/>},
    {path: '/product', element: <ProductPage/>},
    {path: '/subscription', element: <Subscription/>},
    {path: '/our-story', element: <Story />},
    {path: '/checkout', element: <Checkout />},
    {path: '/account', element: <SignIn />},
    {path: '/account-create', element: <SignUp />},
  ]
}])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
