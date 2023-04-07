import Button from "../../components/button-element/Button";
import MenuIcon from "../../components/icons-element/MenuIcon";
import NotificationIcon from "../../components/icons-element/NotificationIcon";
import NotificationNumberIcon from "../../components/icons-element/NotificationNumberIcon";
import "./header.css";
import Icons from "./Icons";
import Logo from "./Logo";
import Register from "./Register";
import SearchBar from "./Search-bar";

const Header = (props) => {
  const { openSideBar } = props;

  return (
    <>
      <div className="header">
        <Logo />
        <SearchBar />
        <Register />
        <Icons />
        <div className="buttons">
          <Button className="notification-button ">
            <div>
              <NotificationIcon className="notification-icon" />
            </div>
            <div className="notification-button-number">
              <NotificationNumberIcon className="notification-button-circule" />
              <span className="notification-button-text">2</span>
            </div>
          </Button>
          <Button onClick={openSideBar} className="notification-button ">
            <MenuIcon className="notification-icon" />
          </Button>
        </div>
      </div>
    </>
  );
};

export default Header;
