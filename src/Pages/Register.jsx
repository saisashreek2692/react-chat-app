import React from "react";
import Avatar from "../img/addAvatar.png";

const Register = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Health Chat</span>
        <span className="title">Register</span>
        <form action="">
          <input type="text" placeholder="Enter Name" />
          <input type="email" placeholder="Enter Email" />
          <input type="password" placeholder="Enter Password" />
          <input style={{ display: "none" }} type="file" id="file" />
          <label htmlFor="file">
            <img src={Avatar} alt="avatar" />
            <span>Add Avatar</span>
          </label>
          <button>Sign Up</button>
        </form>
        <p>You do have account? Login</p>
      </div>
    </div>
  );
};

export default Register;