import React, { useState } from "react";
import teamLogo from "../../images/teamlogo.jpeg";
import yj from "../../images/yj.jpeg";
import je from "../../images/je.png";
import "./Introduce.css";

function Introduce() {
  const [show, setShow] = useState(false);
  const [showYj, setShowYj] = useState(false);
  const [showJe, setShowJe] = useState(false);

  const buttonStyle = {
    background: "none",
    border: "none",
    padding: 0,
    font: "inherit",
    cursor: "pointer",
    outline: "inherit",
    display: show ? "none" : "block",
  };

  const textContainerStyle = {
    position: "absolute",
    top: "20px",
    left: "20px",
    opacity: show ? 1 : 0,
    transition: "opacity 0.5s ease-in",
    paddingLeft: "50px"
  };

  const imgStyle ={
    width: "200px", 
    height: "200px", 
    borderRadius: "70%",
    opacity: showYj || showJe ? 1 : 0,
    transition: "opacity 0.5s ease-in"
  }

  const handleButtonClick = () => {
    setShow(true);
    setTimeout(() => {
      setShowYj(true);
    }, 1000);
    setTimeout(() => {
      setShowJe(true);
    }, 2000);
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", position: "relative" }}>
      <button style={buttonStyle} onClick={handleButtonClick}>
        팀 소개 보기
      </button>
      <div style={textContainerStyle}>
        <p style={{ fontSize: "40px", margin: "0px" }}>팀 소개</p>
        <p>레서판다팀</p>
        <img src={teamLogo} alt="team logo" style={{ width: "200px", height: "150px" }} />

        {showYj && (
          <div>
            <img src={yj} alt="yj" style={imgStyle} />
          </div>
        )}

        {showJe && (
          <div>
            <hr />
            <img src={je} alt="je" style={imgStyle} />
          </div>
        )}
      </div>
      
      <br />
    </div>
  );
}

export default Introduce;
