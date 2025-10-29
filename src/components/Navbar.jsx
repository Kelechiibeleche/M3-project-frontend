import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import myLogo from "../assets/myLogo.png";
import { Authcontext } from "../context/AuthContext";

const Navbar = () => {
  const { isLoggedIn, handleLogout, currentUser } = useContext(Authcontext);

  return (
    <nav>
      <div className="nav-left">
        <img src={myLogo} alt="logo" />
        <h2>RoloCloud</h2>
      </div>

      <div className="nav-right">
        {isLoggedIn ? (
          <>
            <NavLink to="/contacts">
              <button className="btn">All Contacts</button>
            </NavLink>
            <button onClick={handleLogout} className="btn">
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/">
              <button className="btn">Sign Up</button>
            </Link>
            <Link to="/login">
              <button className="btn">Login</button>
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
