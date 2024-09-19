import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [userEmail, setUserEmail] = useState(null);

  const login = (newToken, newUserEmail) => {
    setToken(newToken);
    setUserEmail(newUserEmail);
  };

  const logout = () => {
    setToken(null);
    setUserEmail(null);
  };

  const isLoggedIn = () => {
    return !!token; // La fonction renvoie true si le token existe, sinon false
  };

  return (
    <AuthContext.Provider value={{ token, userEmail, login, logout, isLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
