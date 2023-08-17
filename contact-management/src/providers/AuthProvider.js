import React, {useState, createContext, useContext} from "react";

const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext);
}

const AuthProvider = ({children}) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const setAuth = (value) => {
        setIsAuthenticated(value);
    }

    return (
        <AuthContext.Provider value={{isAuthenticated, setAuth}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;