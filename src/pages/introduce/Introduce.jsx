import React, { useState, useEffect } from "react";
import teamLogo from "../../images/teamlogo.jpeg";
import yj from "../../images/yj.jpeg";
import je from "../../images/je.png";
import kh from "../../images/kh.jpeg";
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
  visibility: show ? "hidden" : "visible", 
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
    display: "relative",
    flexDirection: "column",
    marginLeft: "20px",
    visibility: (showJe || showKh) && show ? "visible" : "hidden", // showJe 또는 showKh가 true이고 show가 true일 때 표시
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
        setShowKh(true); // Set showKh to true when "최지은" is fully visible
      }, 3000);
  
      setTimeout(() => {
        setOpacityKh(1);
      }, 3500); // Adjust the timing for "이강후"
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
    <div style={{ display: "relative", justifyContent: "center", alignItems: "center", height: "100vh", position: "relative" }}>

      <div>
        <div style={textContainerStyle}>
          <p style={{ fontSize: "40px", margin: "0px" }}>팀 소개</p>
          <p>레서판다팀</p>
          <img src={teamLogo} alt="team logo" style={{ width: "200px", height: "150px" }} />
        </div>
    <div>
        {show && (
          <div style={textAfterImageStyle}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <img src={yj} alt="yj" style={{ ...imgStyle, opacity: opacityYj }} />
              {showYjText && (
                <div style={{ marginLeft: "10px", opacity: opacityYj }}>
                  <p>정윤지</p>
                  <hr />
                  <p>만든 페이지: 팀 소개 페이지</p>
                  <p>역할: 팀장, PPT</p>
                </div>
              )}
            </div>
            {showJe && (
              <div style={{ display: "flex", alignItems: "center", marginTop: "20px", paddingLeft : "50%"}}>
                <img src={je} alt="je" style={{ ...imgStyle, opacity: opacityJe }} />
                <div style={{ marginLeft: "10px", opacity: opacityJe }}>
                  <p>최지은</p>
                  <hr />
                  <p>만든 페이지: 홈 페이지</p>
                  <p>역할: 자료 정리, 디자인</p>
                </div>
              </div>
            )}
            {showKh && (
              <div style={{ display: "flex", alignItems: "center", marginTop: "20px" }}>
                <img src={kh} alt="kh" style={{ ...imgStyle, opacity: opacityKh }} />
                <div style={{ marginLeft: "10px", opacity: opacityKh }}>
                  <p>이강후</p>
                  <hr />
                  <p>만든 페이지: [페이지 이름]</p>
                  <p>역할: [역할 설명]</p>
                </div>
              </div>
            )}
          </div>
        )}
        </div>
      </div>
    </div>
    </div>
  );
}

export default Introduce;
