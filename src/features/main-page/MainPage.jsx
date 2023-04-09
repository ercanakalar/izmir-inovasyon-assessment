import "./mainPage.css";

import { useEffect, useState } from "react";
import Divider from "../../components/divider-element/Divider";
import Header from "../header/Header";
import Sidebar from "../header/sidebar/Sidebar";

const MainPage = (props) => {
  const { children } = props;

  const [open, setOpen] = useState(false);

  const width = window.screen.width;

  const openSideBar = () => {
    setOpen(!open);
  };

  const closeSideBarByWidth = (e) => {
    const width = e.view.screen.width;
    if (width < 900) {
      setOpen(false);
    }
  };

  useEffect(() => {
    if (width > 900) {
      setOpen(true);
    }
  }, [width]);

  return (
    <>
      <Header openSideBar={openSideBar} />
      <Divider className="divider-container" />
      <div className="menu-sidebar">
        {open && <Sidebar closeSideBarByWidth={closeSideBarByWidth} />}
        {children}
      </div>
    </>
  );
};

export default MainPage;
