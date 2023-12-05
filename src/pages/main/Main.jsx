import { useState, useEffect } from "react";
import DropdownBox from "../../components/dropdown/DropdownBox";
import MainBox from "../../components/mainBox/MainBox";
import "./Main.css";
import axios from "axios";

export default function Main({ handlePageChange }) {
  const [selectedItem, setSelectedItem] = useState("최신");
  const [mainBoxContents, setMainBoxContents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:4000/contents");
        setMainBoxContents(response.data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
    fetchData();
  }, []);

  let filteredContents;
  const today = new Date();
  switch (selectedItem) {
    case "오늘":
      filteredContents = mainBoxContents.filter(
        (content) =>
          new Date(content.date).getDate() === today.getDate() &&
          new Date(content.date).getMonth() === today.getMonth() &&
          new Date(content.date).getFullYear() === today.getFullYear()
      );
      break;
    case "이번 주":
      const startOfWeek = today.getDate() - today.getDay();
      const endOfWeek = startOfWeek + 6;
      filteredContents = mainBoxContents.filter(
        (content) =>
          new Date(content.date).getDate() >= startOfWeek &&
          new Date(content.date).getDate() <= endOfWeek &&
          new Date(content.date).getMonth() === today.getMonth() &&
          new Date(content.date).getFullYear() === today.getFullYear()
      );
      break;
    case "이번 달":
      filteredContents = mainBoxContents.filter(
        (content) =>
          new Date(content.date).getMonth() === today.getMonth() &&
          new Date(content.date).getFullYear() === today.getFullYear()
      );
      break;
    case "올해":
      filteredContents = mainBoxContents.filter(
        (content) =>
          new Date(content.date).getFullYear() === today.getFullYear()
      );
      break;
    default:
      filteredContents = [...mainBoxContents];
      break;
  }
  filteredContents.sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <div className="mainPageLayout">
      <div className="mainPageContainer">
        <div className="mainPageDropdown">
          <DropdownBox
            selectedItem={selectedItem}
            setSelectedItem={setSelectedItem}
          />
        </div>
        <div className="mainPageBox">
          {filteredContents.map((content) => (
            <div
              key={content.id}
              onClick={() => handlePageChange("Detail", content.id)}
            >
              <MainBox {...content} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
