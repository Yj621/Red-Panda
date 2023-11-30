import React, { useState, useEffect } from "react";
import teamLogo from "../../images/teamlogo.jpeg";
import yj from "../../images/yj.jpeg";
import je from "../../images/je.png";
import "./Introduce.css";

function Introduce() {
  const [show, setShow] = useState(false);
  const [showJe, setShowJe] = useState(false);
  const [opacityYj, setOpacityYj] = useState(0);
  const [opacityJe, setOpacityJe] = useState(0);

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
    paddingLeft: "50px",
  };

  const imgStyle = {
    width: "200px",
    height: "200px",
    borderRadius: "70%",
    transition: "opacity 0.5s ease-in",
  };

  const handleButtonClick = () => {
    setShow(true);
  };

  useEffect(() => {
    const showImages = () => {
      setTimeout(() => {
        setOpacityYj(1);
      }, 1000);
      setTimeout(() => {
        setShowJe(true);
      }, 2000);
    };
  
    if (show) {
      showImages();
    }
  }, [show]);
  
  useEffect(() => {
    if (showJe) {
      setTimeout(() => {
        setOpacityJe(1);
      }, 1000);
    }
  }, [showJe]);

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", position: "relative" }}>
      <button style={buttonStyle} onClick={handleButtonClick}>
        팀 소개 보기
      </button>
      <div>
        <div style={textContainerStyle}>
          <p style={{ fontSize: "40px", margin: "0px" }}>팀 소개</p>
          <p>레서판다팀</p>
          <img src={teamLogo} alt="team logo" style={{ width: "200px", height: "150px" }} />
        </div>

        <div>
          {show && (
            <div>
              <img src={yj} alt="yj" style={{ ...imgStyle, opacity: opacityYj }} />
              {showJe && (
                <div>
                  <hr />
                  <img src={je} alt="je" style={{ ...imgStyle, opacity: opacityJe }} />
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      <br />
    </div>
  );
}

export default Introduce;
