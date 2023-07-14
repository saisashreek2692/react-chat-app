import React from "react";
import Img from "../img/img.png";
import Attach from "../img/attach.png";

const Inputs = () => {
  return (
    <div className="input">
      <input type="text" placeholder="Send Your Messages Here......" />
      <div className="send">
        <input type="file" id="files" style={{ display: "none" }} />
        <label htmlFor="files">
          <img src={Attach} alt="Add Your Files" />
        </label>
        <input type="file" style={{ display: "none" }} id="images" />
        <label htmlFor="images">
          <img src={Img} alt="Add Your Images" />
        </label>
        <button>Send</button>
      </div>
    </div>
  );
};

export default Inputs;
