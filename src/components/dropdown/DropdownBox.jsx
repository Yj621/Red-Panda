import { useState } from "react";
import "../dropdown/Dropdown.css";
import Dropdown from "./Dropdown";

export default function DropdownBox({ selectedItem, setSelectedItem }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <div className="dropdownContainer">
      <div className="dropdownBox" onClick={handleClick}>
        <input
          type="text"
          className="dropdownBoxInput"
          readOnly
          value={selectedItem}
        />
        <svg
          width="9"
          height="6"
          viewBox="0 0 9 6"
          fill="none"
          className="dropdownBoxButton"
        >
          <path d="M4.5 6L0.602886 0L8.39711 0L4.5 6Z" fill="#D3D3D3" />
        </svg>
      </div>
      {isDropdownOpen && (
        <Dropdown
          setIsDropdownOpen={setIsDropdownOpen}
          setSelectedItem={setSelectedItem}
          selectedItem={selectedItem}
        />
      )}
    </div>
  );
}
