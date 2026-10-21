import { createContext } from "react";

const Auth = createContext()

export const AuthProvider = ({children}) => {
    return <Auth.Provider>
        {children}
    </Auth.Provider>
}