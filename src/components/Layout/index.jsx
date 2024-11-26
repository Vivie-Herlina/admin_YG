import { useMediaQuery } from "@uidotdev/usehooks";
import Navbar from "../Navbar";
import "./style.css";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import SidebarMini from "../SidebarMini";

function Layout({ children }) {
  const isSmallDevice = useMediaQuery("only screen and (max-width : 1024px)");

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    if (!isSmallDevice) setIsSidebarOpen(false);
  }, [isSmallDevice]);

  return (
    <>
      <Navbar onOpen={() => setIsSidebarOpen(true)} />
      {/* <Sidebar open={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} /> */}
      <div className="container">
        <div className="layout">
          <SidebarMini />
          <main className="content">{children}</main>
        </div>
      </div>
      {isSidebarOpen && <div className="overlay" />}
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
