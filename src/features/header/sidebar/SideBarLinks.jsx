import Button from "../../../components/button-element/Button";
import "./sidebarlinks.css";

import { Link } from "react-router-dom";

const SideBarLinks = (props) => {
  const { text, icon, openSideBar } = props;
  const link = "/" + text.toLowerCase();
  return (
    <Link to={link}>
      <Button onClick={openSideBar} className="sidebarlink_button">
        <div className="sidebarlink_button-icon">{icon}</div>
        <span className="sidebarlink_button-text">{text}</span>
      </Button>
    </Link>
  );
};

export default SideBarLinks;
