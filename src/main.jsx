import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router"
import AuthLayout from './pages/layouts/AuthLayout.jsx'
import Login from './pages/AuthPages/Login.jsx'
import Register from './pages/AuthPages/Register.jsx'

let router = createBrowserRouter([
    {
      path:"/",
      element: <AuthLayout />,
      children:[
        {
          index:true,
          element:<Login />
        },
        {
          path:"/register",
          element:<Register />
        },
      ]
    }
])

createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
