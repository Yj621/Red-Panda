import "./MainBox.css";
import image from "../../images/teamlogo.jpeg";

export default function MainBox({ imageUrl }) {
  return (
    <div className="mainBoxLayout">
      <img className="mainBoxImage" src={image} alt="미리보기" />
      <div className="mainBox">
        <div className="mainBoxContent">
          <h1>TitleTitleTitleTitleTitleTitleTitleTitleTitle</h1>
          <h2>ContentContentContentContentContentContentContent</h2>
        </div>
        <h3>2023년 11월 15일</h3>
      </div>
      <div className="mainBoxProfile">
        <img className="mainBoxProfileImage" alt="profile" />
        <h4>by</h4>
        <h5>최지은</h5>
      </div>
    </div>
  );
}
