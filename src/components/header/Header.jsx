import { NavLink } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <header>
      <div className="headerBox">
        <NavLink
          exact
          to="/"
          className={({ isActive }) =>
            isActive ? "headerItemActive" : "headerItem"
          }
        >
          홈
        </NavLink>
        <NavLink
          exact
          to="/introduce"
          className={({ isActive }) =>
            isActive ? "headerItemActive" : "headerItem"
          }
        >
          팀 소개
        </NavLink>
      </div>
      <NavLink to="/write" className="headerButton">
        새 글 작성
      </NavLink>
    </header>
  );
}
