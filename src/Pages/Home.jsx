import React from "react";
import { Sidebar, Chat } from "../Components/index";

const Home = () => {
  return (
    <>
      <div className="home">
        <div className="container">
          <Sidebar />
          <Chat />
        </div>
      </div>
    </>
  );
};

export default Home;
