import { useForm } from "react-hook-form"
import { useContextData } from "../context/AuthContext"
import { useNavigate } from "react-router"
import { toast } from "react-toastify"

export const useAuth = () => {
    const navigate = useNavigate()
    const {registeredUsers,setRegisteredUsers,loggedInUser,setLoggedInUser} = useContextData()
    const {register,handleSubmit,reset,formState:{errors}} = useForm()

    const handleRegister = (data) => {
        let arr = [...registeredUsers, {id:Date.now(),...data}]
        setRegisteredUsers(arr)
        localStorage.setItem("registeredUsers",JSON.stringify(arr))
        toast.success("user registered")
        navigate("/")
        reset()
    }

    const handleLogin = (data) => {
        const existUser = registeredUsers.find((user) => user.email===data.email && user.password===data.password)
        if(!existUser){
            toast.error("invalid credentials")
            return
        }
        localStorage.setItem("loggedInUser",JSON.stringify(existUser))
        toast.success("user logged in")
        navigate("/main")
        reset()
    }


    return {
        register,
        handleSubmit,
        handleRegister,
        handleLogin,
        errors
    }

}