import React, { useState, useEffect } from "react";
import teamLogo from "../../images/teamlogo.jpeg";
import "./Introduce.css";

function Introduce() {
  const [show, setShow] = useState(false);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const isScroll = window.scrollY > 20;
      setScroll(isScroll);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const centerStyle = scroll
    ? {
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        height: "200vh",
        overflow: "scroll",
      }
    : {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "150vh",
        overflow: "scroll",
      };

  const buttonStyle = {
    background: "none",
    border: "none",
    padding: 0,
    font: "inherit",
    cursor: "pointer",
    outline: "inherit",
  };

  const showStyle = {
    animation: show ? "slide-up 1s forwards" : "",
    opacity: show ? 1 : 0,
  };

  const handleButtonClick = () => {
    setShow(true);
  };

  return (
    <div style={centerStyle}>
      {scroll && <p style={{ position: "fixed", top: 40 }}>팀 소개</p>}
      {show ? (
        <div style={showStyle}>
          <p style={{ textAlign: scroll ? "left" : "center" }}>레서판다팀</p>
          <img src={teamLogo} alt="team logo" />
        </div>
      ) : (
        <button style={buttonStyle} onClick={handleButtonClick}>
          팀 소개 보기
        </button>
      )}
    </div>
  );
}

export default Introduce;
