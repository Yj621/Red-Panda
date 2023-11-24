import React from "react";
import "./Dropdown.css";

export default function Dropdown({
  setIsDropdownOpen,
  setSelectedItem,
  selectedItem,
}) {
  const handleItemClick = (item) => {
    setSelectedItem(item); // 선택된 아이템을 상태 변수에 저장
    setIsDropdownOpen(false);
  };
  return (
    <ul className="dropdownList">
      <li
        className={`dropdownItem ${selectedItem === "오늘" ? "active" : ""}`}
        onClick={() => handleItemClick("오늘")}
      >
        오늘
      </li>
      <li
        className={`dropdownItem ${selectedItem === "이번 주" ? "active" : ""}`}
        onClick={() => handleItemClick("이번 주")}
      >
        이번 주
      </li>
      <li
        className={`dropdownItem ${selectedItem === "이번 달" ? "active" : ""}`}
        onClick={() => handleItemClick("이번 달")}
      >
        이번 달
      </li>
      <li
        className={`dropdownItem ${selectedItem === "올해" ? "active" : ""}`}
        onClick={() => handleItemClick("올해")}
      >
        올해
      </li>
    </ul>
  );
}
