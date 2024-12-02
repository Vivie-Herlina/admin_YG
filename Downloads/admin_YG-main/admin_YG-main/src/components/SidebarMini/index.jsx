import { Link, useLocation } from "react-router-dom";
import "./style.css";

const MENU_SIDEBAR = [
  { name: "Dashboard", url: "/" },
  { name: "Product", url: "/product" },
  { name: "Artist", url: "/artist" },
  { name: "Concert & Event", url: "/concerts" }, // Update URL
  { name: "Delivery History", url: "/Deliveryhistory" }, // Update URL
  { name: "Admin Account", url: "/adminsettings" },     // Update URL
];


function SidebarMini() {
  const location = useLocation();
  const pathname = location?.pathname || "/";

  return (
    <>
      <aside className="sidebar">
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

export default SidebarMini;
