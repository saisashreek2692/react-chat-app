import React from "react";

const Login = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Health Chat</span>
        <span className="title">Login</span>
        <form action="">
          <input type="email" placeholder="Enter Email" />
          <input type="password" placeholder="Enter Password" />
          <button>Sign In</button>
        </form>
        <p>You do not have account? Register</p>
      </div>
    </div>
  );
};

export default Login;
