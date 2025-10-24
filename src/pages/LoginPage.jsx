import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigate();

  async function handleLoginUser(e) {
    e.preventDefault();
    const userToLogin = { email, password };
    try {
      const { data } = await axios.post(
        "http://localhost:5005/auth/login",
        userToLogin
      );
      console.log("you logged in!", data);
      localStorage.setItem("authToken", data.authToken);

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
        <button>Login</button>
      </form>
      <p>New here?</p>
      <Link to="/signup"> Sign up </Link>
    </div>
  );
};

export default LoginPage;
