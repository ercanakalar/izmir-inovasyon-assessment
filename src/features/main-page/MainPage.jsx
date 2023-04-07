import "./mainPage.css";

import { useState } from "react";
import Divider from "../../components/divider-element/Divider";
import Header from "../header/Header";
import Sidebar from "../header/sidebar/Sidebar";

const MainPage = (props) => {
  const { children } = props;

  const [open, setOpen] = useState(false);

  const openSideBar = () => {
    setOpen(!open);
  };

  return (
    <>
      <Header openSideBar={openSideBar} />
      <Divider className="divider-container" />
      <div className="menu-sidebar">
        {open && <Sidebar openSideBar={openSideBar} />}
        {children}
      </div>
    </>
  );
};

export default MainPage;
