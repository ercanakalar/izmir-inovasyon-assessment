import AnalyticsIcon from "../../../components/icons-element/AnalyticsIcon";
import DashBoardIcon from "../../../components/icons-element/DashBoardIcon";
import SideBarLinks from "./SideBarLinks";
import SidebarTitle from "./SidebarTitle";
import "./sidebar.css";

const Sidebar = (props) => {
  const { closeSideBarByWidth } = props;

  return (
    <div className="sidebar">
      <div className="sidebar_container">
        <SidebarTitle />
        <SideBarLinks
          closeSideBarByWidth={closeSideBarByWidth}
          text="Dashboard"
          icon={<DashBoardIcon />}
        />
        <SideBarLinks
          closeSideBarByWidth={closeSideBarByWidth}
          text="Analytics"
          icon={<AnalyticsIcon />}
        />
      </div>
    </div>
  );
};

export default Sidebar;
