import React from "react";
import Video from "../img/cam.png";
import Addusr from "../img/add.png";
import More from "../img/more.png";
import { Messages, Inputs } from "./index";

const Chat = () => {
  return (
    <div className="chat">
      <div className="chatInfo">
        <span>Sashreek</span>
        <div className="chatIcons">
          <img src={Video} alt="Video Call" />
          <img src={Addusr} alt="Add User" />
          <img src={More} alt="More Options" />
        </div>
      </div>
      <Messages />
      <Inputs />
    </div>
  );
};

export default Chat;
