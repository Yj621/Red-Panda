import "./Header.css";

export default function Header() {
  return (
    <header>
      <div className="headerBox">
        <span className="headerItem">홈</span>
        <span className="headerItem">팀 소개</span>
      </div>
      <button className="headerButton">새 글 작성</button>
    </header>
  );
}
