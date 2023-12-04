import React, { useState, useEffect } from "react";
import teamLogo from "../../images/teamlogo.jpeg";
import yj from "../../images/yj.jpeg";
import je from "../../images/je.png";
import kh from "../../images/kh.jpeg";
import gh from "../../images/github.png";
import "./Introduce.css";

function Introduce() {
  const [show, setShow] = useState(false);
  const [showJe, setShowJe] = useState(false);
  const [showKh, setShowKh] = useState(false);
  const [opacityYj, setOpacityYj] = useState(0);
  const [opacityJe, setOpacityJe] = useState(0);
  const [opacityKh, setOpacityKh] = useState(0);
  const [showYjText, setShowYjText] = useState(false);

  const buttonStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    alignItems: "center",
    background: "none",
    border: "none",
    padding: 0,
    font: "inherit",
    cursor: "pointer",
    outline: "inherit",
    visibility: show ? "hidden" : "block",
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

  const textAfterImageStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "20px",
    visibility: (showJe || showKh) && show ? "visible" : "hidden",
  };


  const handleButtonClick = () => {
    setShow(true);
  };

  useEffect(() => {
    const showImages = () => {
      setTimeout(() => {
        setOpacityYj(1);
        setShowJe(true);
      }, 1000);

      setTimeout(() => {
        setShowYjText(true);
      }, 1000);

      setTimeout(() => {
        setOpacityJe(1);
        setShowKh(true);
      }, 3000);

      setTimeout(() => {
        setOpacityKh(1);
      }, 3500);
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
    <div>
      <button style={buttonStyle} onClick={handleButtonClick}>
        팀 소개 보기
      </button>

      <div style={{ display: "relative", justifyContent: "center", alignItems: "center", position: "relative" }}>
        <div style={textContainerStyle}>
          <p style={{ fontSize: "40px", margin: "0px" }}>팀 소개</p>
          <p> &lt; 레서판다팀 &gt; </p>
          <img src={teamLogo} alt="team logo" style={{ width: "200px", height: "150px" }} />
        </div>

        {show && (
          <div style={textAfterImageStyle}>
            <div style={{ display: "flex", alignItems: "center", paddingTop: "8%" }}>
              <img src={yj} alt="yj" style={{ ...imgStyle, opacity: opacityYj }} />
              {showYjText && (
                <div style={{ marginLeft: "10px", opacity: opacityYj }}>
                  <p>정윤지</p>
                  <hr />
                  <p>만든 페이지: 팀 소개 페이지</p>
                  <p>역할: 팀장, PPT</p>
                  <a href="https://github.com/Yj621" target="_blank" rel="noopener noreferrer">
                  <img src={gh} alt="GitHub" style={{ ...imgStyle, opacity: opacityJe ,height : "20px", width: "20px"}} />
                  </a>
                </div>
              )}
            </div>
            {showJe && (
              <div style={{ display: "flex", alignItems: "center", marginTop: "20px", paddingLeft: "30%" }}>
                <div style={{ display: "flex", flexDirection: "column", marginLeft: "10px", opacity: opacityJe, justifyContent: "flex-end" }}>
                  <p>최지은</p>
                  <hr />
                  <p>만든 페이지: 홈 페이지</p>
                  <p>역할: 자료 정리, 디자인</p>
                  <a href="https://github.com/Cjieun" target="_blank" rel="noopener noreferrer">
                    <img src={gh} alt="GitHub" style={{ ...imgStyle, opacity: opacityJe ,height : "20px", width: "20px"}} />
                  </a>
                  <img src={je} alt="je" style={{ ...imgStyle, opacity: opacityJe }} />
                </div>
              </div>
            )}
            {showKh && (
              <div style={{ display: "flex", alignItems: "center", marginTop: "20px" }}>
                <img src={kh} alt="kh" style={{ ...imgStyle, opacity: opacityKh }} />
                <div style={{ marginLeft: "10px", opacity: opacityKh }}>
                  <p>이강후</p>
                  <hr />
                  <p>만든 페이지: 글 작성 페이지</p>
                  <p>역할: 발표</p>
                  <a href="https://github.com/leekanghoo" target="_blank" rel="noopener noreferrer">
                    <img src={gh} alt="GitHub" style={{ ...imgStyle, opacity: opacityJe ,height : "20px", width: "20px"}} />
                  </a>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Introduce;
