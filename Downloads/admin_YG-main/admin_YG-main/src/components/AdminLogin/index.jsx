import React from "react";
import "./LoginForm.css"; // File CSS khusus untuk komponen login

const LoginForm = () => {
  return (
    <div className="login-container">
      <h2>Admin Sign In</h2>
      <form>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            placeholder="Enter Username"
            style={{
              backgroundColor: "white",
            }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter Password"
            style={{
              backgroundColor: "white",
            }}
          />
        </div>
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default LoginForm;
