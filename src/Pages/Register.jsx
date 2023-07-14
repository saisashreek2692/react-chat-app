import React, { useState } from "react";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import Avatar from "../img/addAvatar.png";

const Register = () => {
  const handleSubmit = (e) => {
    const [err, setErr] = useState(false);
    e.preventDefault();
    //console.log(e.target[0].value);
    const userName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try {
      const res = createUserWithEmailAndPassword(auth, email, password);
    } catch (err) {}
  };

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Health Chat</span>
        <span className="title">Register</span>
        <form onSubmit={handleSubmit}>
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
