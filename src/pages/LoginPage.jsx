import axios from "axios";
import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Authcontext } from "../context/AuthContext";
import { API_URL } from "../config/api.config";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigate();

  const { authenticateUser } = useContext(Authcontext);
  async function handleLoginUser(e) {
    e.preventDefault();
    const userToLogin = { email, password };
    try {
      const { data } = await axios.post(`${API_URL}/auth/login`, userToLogin);
      console.log("you logged in!", data);
      localStorage.setItem("authToken", data.authToken);

      await authenticateUser();
      nav("/profile");
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      <h2>Login to RoloCloud!</h2>
      <form onSubmit={handleLoginUser}>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
        </label>
        <button className="btn">Login</button>
      </form>
      <p>New here?</p>
      <Link to="/">
        <button className="btn">Sign up </button>
      </Link>
    </div>
  );
};

export default LoginPage;
