import React, { useContext } from "react";
import Video from "../img/cam.png";
import Addusr from "../img/add.png";
import More from "../img/more.png";
import { Messages, Inputs } from "./index";
import { ChatContext } from "../Context/ChatContext";

const Chat = () => {
  const { data } = useContext(ChatContext);

  return (
    <div className="chat">
      <div className="chatInfo">
        <span>{data.user?.displayName}</span>
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
