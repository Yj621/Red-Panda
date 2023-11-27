import "./MainBox.css";

export default function MainBox(props) {
  const { title, content, imageUrl, date, author } = props;
  return (
    <div className="mainBoxLayout">
      <img className="mainBoxImage" src={imageUrl} alt="미리보기" />
      <div className="mainBox">
        <div className="mainBoxContent">
          <h1>{title}</h1>
          <h2>{content}</h2>
        </div>
        <h3>{date}</h3>
      </div>
      <div className="mainBoxProfile">
        <img className="mainBoxProfileImage" alt="profile" />
        <h4>by</h4>
        <h5>{author}</h5>
      </div>
    </div>
  );
}
