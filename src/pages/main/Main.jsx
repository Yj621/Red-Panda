import DropdownBox from "../../components/dropdown/DropdownBox";
import MainBox from "../../components/mainBox/MainBox";
import "./Main.css";

export default function Main() {
  return (
    <div className="mainPageLayout">
      <div className="mainPageContainer">
        <div className="mainPageDropdown">
          <DropdownBox />
        </div>
        <div className="mainPageBox">
          <MainBox />
          <MainBox />
          <MainBox />
          <MainBox />
          <MainBox />
          <MainBox />
          <MainBox />
          <MainBox />
          <MainBox />
          <MainBox />
          <MainBox />
          <MainBox />
        </div>
      </div>
    </div>
  );
}
