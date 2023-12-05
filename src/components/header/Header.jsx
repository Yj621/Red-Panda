import React from "react";
import "./Header.css";

export default function Header({ currentPage, handlePageChange }) {
  return (
    <header>
      <div className="headerBox">
        <div
          className={currentPage === "Main" ? "headerItemActive" : "headerItem"}
          onClick={() => handlePageChange("Main")}
        >
          홈
        </div>
        <div
          className={
            currentPage === "Introduce" ? "headerItemActive" : "headerItem"
          }
          onClick={() => handlePageChange("Introduce")}
        >
          팀 소개
        </div>
      </div>
      <div className="headerButton" onClick={() => handlePageChange("Write")}>
        새 글 작성
      </div>
    </header>
  );
}
