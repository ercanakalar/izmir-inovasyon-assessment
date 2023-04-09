import "./popup.css";
import Button from "../button-element/Button";
import DeleteIcon from "../icons-element/DeleteIcon";

const Popup = (props) => {
  const { closePopup } = props;

  return (
    <div className="popup">
      <Button onClick={closePopup} className="popup-delete">
        <DeleteIcon />
      </Button>
    </div>
  );
};

export default Popup;
