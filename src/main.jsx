import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router"
import AuthLayout from './pages/layouts/AuthLayout.jsx'
import Login from './pages/AuthPages/Login.jsx'
import Register from './pages/AuthPages/Register.jsx'
import ProtectedRoute from './routes/ProtectedRoute.jsx'
import MainLayout from './pages/layouts/MainLayout.jsx'
import Home from './pages/MainPages/Home.jsx'
import Product from './pages/MainPages/Product.jsx'
import User from './pages/MainPages/User.jsx'
import { AuthProvider } from './context/AuthContext.jsx'
import { ToastContainer } from 'react-toastify'

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
    },

    {
      path:"/main",
      element: <ProtectedRoute />,
      children:[
        {
          path:"",
          element: <MainLayout />,
          children: [
            {
              index: true,
              element: <Home />
            },
            {
              path:"products",
              element:<Product />
            },
            {
              path:"users",
              element:<User />
            }
          ]
        }
      ]
    }
])

createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <RouterProvider router={router} />
    <ToastContainer />
  </AuthProvider>
)
