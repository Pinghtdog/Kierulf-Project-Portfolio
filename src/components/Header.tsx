import { Link } from "react-router-dom"; // 1. Import Link
import "../css/Header.css";

function Header() {
  return (
    <header className="navbar">
      <nav>
        {/* 2. Replace all <a> tags with <Link> and href with to */}
        <Link className="nav-link" to="/">
          Home
        </Link>
        <Link className="nav-link" to="/about">
          About
        </Link>
        <Link className="nav-link" to="/projects">
          Projects
        </Link>
        <Link className="nav-link" to="/contact">
          Contact
        </Link>
      </nav>
    </header>
  );
}

export default Header;
