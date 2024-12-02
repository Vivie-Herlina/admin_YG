import { Link, useLocation } from "react-router-dom";
import "./style.css";
import Iconify from "../Icon";

const MENU_SIDEBAR = [
  { name: "Dashboard", url: "/" },
  { name: "Product", url: "/product" },
  { name: "Artist", url: "/artist" },
  { name: "Concert & Event", url: "/concerts" }, // Update URL
  { name: "Deliver History", url: "/history" }, // Update URL
  { name: "Admin Account", url: "/admin" },     // Update URL
];


function Sidebar({ open, onClose }) {
  const location = useLocation();
  const pathname = location?.pathname || "/";

  return (
    <>
      <aside className={`sidebar ${open ? "open" : ""}`}>
        <button className="sidebar-close" onClick={() => onClose()}>
          <Iconify icon="typcn:times" width={24} />
        </button>
        <nav className="navigation">
          {MENU_SIDEBAR.map((item, index) => (
            <Link
              key={`sidebar-${index}`}
              className={pathname === item.url ? "active" : ""}
              to={item.url}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </aside>
    </>
  );
}

export default Sidebar;
