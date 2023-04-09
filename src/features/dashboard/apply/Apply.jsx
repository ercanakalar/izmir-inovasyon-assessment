import { useState } from "react";
import "./apply.css";
import CitizenApply from "./CitizenApply";
import Popup from "../../../components/popup-element/Popup";

const Apply = (props) => {
  const [openPopup, setOpenPopup] = useState(false);

  const closePopup = () => {
    setOpenPopup(!openPopup);
  };

  const clickOpenPopup = () => {
    return <Popup closePopup={closePopup} />;
  };

  return (
    <>
      <CitizenApply openPopup={closePopup} />
      {openPopup && clickOpenPopup()}
    </>
  );
};

/* Export Main Component */
export default Apply;
