import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DropdownBox from "../../components/dropdown/DropdownBox";
import MainBox from "../../components/mainBox/MainBox";
import "./Main.css";
import image from "../../images/teamlogo.jpeg";
import image2 from "../../images/image1.png";

const mainBoxContents = [
  {
    id: 1,
    title: "첫 번째 글",
    content: "첫 번째 글의 내용입니다.",
    imageUrl: [image, image2],
    date: "2023-11-27",
    profile: image,
    author: "작성자1",
    hashTags: ["웹", "ICT", "소프트웨어"],
  },
  {
    id: 2,
    title: "두 번째 글",
    content: "두 번째 글의 내용입니다.",
    imageUrl: [image, image2],
    date: "2023-11-26",
    profile: image,
    author: "작성자2",
  },
  {
    id: 3,
    title: "세 번째 글",
    content: "세 번째 글의 내용입니다.",
    imageUrl: [image, image2],
    date: "2023-11-25",
    profile: image,
    author: "작성자3",
  },
  {
    id: 4,
    title: "네 번째 글",
    content: "네 번째 글의 내용입니다.",
    imageUrl: [image, image2],
    date: "2023-11-24",
    profile: image,
    author: "작성자4",
  },
  {
    id: 5,
    title: "다섯 번째 글",
    content: "다섯 번째 글의 내용입니다.",
    imageUrl: [image, image2],
    date: "2023-11-23",
    profile: image,
    author: "작성자5",
  },
  {
    id: 6,
    title: "여섯 번째 글",
    content: "여섯 번째 글의 내용입니다.",
    imageUrl: [image, image2],
    date: "2023-09-22",
    profile: image,
    author: "작성자6",
  },
  {
    id: 7,
    title: "일곱 번째 글",
    content: "일곱 번째 글의 내용입니다.",
    imageUrl: [image, image2],
    date: "2023-10-21",
    profile: image,
    author: "작성자7",
  },
  {
    id: 8,
    title: "여덟 번째 글",
    content: "여덟 번째 글의 내용입니다.",
    imageUrl: [image, image2],
    date: "2023-10-20",
    profile: image,
    author: "작성자8",
  },
];

export default function Main() {
  const navigate = useNavigate();

  const [selectedItem, setSelectedItem] = useState("최신");

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

  console.log(filteredContents);

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
