import { createContext, useEffect, useState } from "react";
import axios from "axios";

const Authcontext = createContext();

const AuthContentWrapper = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  async function authenticateUser() {
    const theToken = localStorage.getItem("authToken");
    try {
      const { data } = await axios.get("http://localhost:5005/auth/verify", {
        headers: { authorization: `Bearer ${theToken}` },
      });

      console.log("verified user", data);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      setIsLoggedIn(false);
    }
  }



  useEffect(()=> {
    authenticateUser();
  } []);

  return;
  <Authcontext.Provider value={user1}> {children}</Authcontext.Provider>;
};

export { Authcontext, AuthContentWrapper };
