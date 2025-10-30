import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { API_URL } from "../config/api.config";

const SignupPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const nav = useNavigate();

  async function handleSignupUser(e) {
    e.preventDefault();
    const userToCreate = { username, email, password };
    try {
      const createdUser = await axios.post(
        `${API_URL}/auth/signup`,
        userToCreate
      );
      console.log("user signed up!", createdUser);
      nav("/login");
    } catch (error) {
      console.log(error.response.data.errorMessage);
      setError(error.response.data.errorMessage);
    }
  }
  return (
    <div>
      <h2>Welcome to RoloCloud!</h2>
      <form onSubmit={handleSignupUser}>
        <label>
          Username:
          <input
            type="text"
            placeholder="John Doe"
            value={username}
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            placeholder="johndoe@gmail.com"
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
            placeholder="password (6+ characters)"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
        </label>
        <button className="btn">Create an account</button>
        {error && <p className="error">{error}</p>}
      </form>
      <p>Already a member?</p>
      <Link to="/login">
        <button className="btn">Login</button>{" "}
      </Link>
    </div>
  );
};

export default SignupPage;
