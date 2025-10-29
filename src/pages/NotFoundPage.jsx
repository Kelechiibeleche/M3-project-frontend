import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="notfound-container">
      <h1>404</h1>
      <h2>Oops! Page Not Found</h2>
      <p>The page you’re looking for doesn’t exist or has been moved.</p>

      <Link to="/contacts">
        <button className="btn">Go Back Home</button>
      </Link>
    </div>
  );
};

export default NotFoundPage;
