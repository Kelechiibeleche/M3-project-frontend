import React, { useContext } from "react";
import { Link } from "react-router-dom";
import myLogo from "../assets/myLogo.png";
import { Authcontext } from "../context/AuthContext";

const Navbar = () => {
  const { isLoggedIn, handleLogout } = useContext(Authcontext);

  return (
    <nav>
      <img src={myLogo} alt="logo" />
      <h2>RoloCloud</h2>

      {isLoggedIn ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <>
          <Link to="/">
            <button>Sign Up</button>
          </Link>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </>
      )}
    </nav>
  );
};

export default Navbar;
