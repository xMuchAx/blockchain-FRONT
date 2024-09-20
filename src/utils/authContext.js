import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")))

  const login = (newToken, user) => {
    setToken(newToken);
    setUser(user)
  };

  const logout = () => {
    setToken(null);
    setUser(null)
  };

  const isLoggedIn = () => {
    return !!token; // La fonction renvoie true si le token existe, sinon false
  };

  return (
    <AuthContext.Provider value={{ token, user, login, logout, isLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
