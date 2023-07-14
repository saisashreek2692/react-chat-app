import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">Health Chat</span>
      <div className="user">
        <img
          src="https://img.freepik.com/free-photo/portrait-serious-smiling-modern-indian-man-near-office-building_496169-2890.jpg?w=1380&t=st=1689333609~exp=1689334209~hmac=47859bc8ec9d17d595ec39be539d353c33168eab2d62ba24664f7e0d3c7d63ba"
          alt="user picture"
        />
        <span>Sai</span>
        <button>Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
