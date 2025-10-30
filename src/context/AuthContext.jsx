import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../config/api.config";

const Authcontext = createContext();

const AuthContentWrapper = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const nav = useNavigate();

  async function authenticateUser() {
    const theToken = localStorage.getItem("authToken");

    if (!theToken) {
      console.log("No token found");
      setIsLoading(false);
      setIsLoggedIn(false);
      return;
    }

    try {
      const { data } = await axios.get(`${API_URL}/auth/verify`, {
        headers: { Authorization: `Bearer ${theToken}` },
      });

      console.log("verified user", data);
      setCurrentUser(data.currentUser);
      setIsLoading(false);
      setIsLoggedIn(true);
    } catch (error) {
      console.log(error);
      setCurrentUser({});
      setIsLoading(false);
      setIsLoggedIn(false);
    }
  }

  function handleLogout() {
    localStorage.removeItem("authToken");
    nav("/login");
    setCurrentUser({});
    setIsLoading(false);
    setIsLoggedIn(false);
  }

  useEffect(() => {
    authenticateUser();
  }, []);

  return (
    <Authcontext.Provider
      value={{
        currentUser,
        isLoading,
        isLoggedIn,
        handleLogout,
        authenticateUser,
      }}
    >
      {children}
    </Authcontext.Provider>
  );
};

export { Authcontext, AuthContentWrapper };
