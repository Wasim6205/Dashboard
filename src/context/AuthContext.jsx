import { createContext, useContext, useState } from "react";

const Auth = createContext()

export const AuthProvider = ({children}) => {
    const [registeredUsers,setRegisteredUsers] = useState(JSON.parse(localStorage.getItem("registeredUsers")) || [])
    const [loggedInUser,setLoggedInUser] = useState(JSON.parse(localStorage.getItem("loggedInUser")))

    console.log("users",registeredUsers);
    console.log("user",loggedInUser);
    
    return <Auth.Provider value={{registeredUsers,setRegisteredUsers,loggedInUser,setLoggedInUser}}>
        {children}
    </Auth.Provider>
}

// hook
export const useContextData = () => useContext(Auth)