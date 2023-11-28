import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DropdownBox from "../../components/dropdown/DropdownBox";
import MainBox from "../../components/mainBox/MainBox";
import "./Main.css";
import image_url1 from "../../images/teamlogo.jpeg";
import image_url2 from "../../images/image1.png";
import axios from "axios";

const images = { image_url1, image_url2 };

export default function Main() {
  const navigate = useNavigate();

  const [selectedItem, setSelectedItem] = useState("최신");
  const [mainBoxContents, setMainBoxContents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:4000/contents");
        const contents = response.data.map((content) => ({
          ...content,
          imageUrl: content.imageUrl.map((name) => images[name]),
          profile: images[content.profile],
        }));
        setMainBoxContents(contents);
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
              onClick={() =>
                navigate(`/detail/${content.id}`, { state: { content } })
              }
            >
              <MainBox {...content} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
