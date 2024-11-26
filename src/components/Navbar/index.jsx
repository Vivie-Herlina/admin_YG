import { Link } from "react-router-dom";
import "./style.css";

function Navbar() {
  return (
    <div className="navbar">
      <header className="header">
        <div className="header-left">
          {/* <button className="sidebar-open" onClick={() => onOpen()}>
            <Iconify icon="ion:menu" width={24} />
          </button> */}
          <Link to="/" className="logo">
            <img src="/logo.png" alt="Logo" />
          </Link>
        </div>
        <button className="logout">Log out</button>
      </header>
    </div>
  );
}

export default Navbar;
