import "./checkbox.css";
import Input from "../input-element/Input";

const Checkbox = (props) => {
  const { text, handleCheck, name, required, openPopup } = props;
  return (
    <div className="card-send-checkbox">
      <label className="script">
        <Input
          handleChange={handleCheck}
          type="checkbox"
          name={name}
          className="card-send-checkbox-input"
          required={required}
        />
        <span className="w3docs"></span>
      </label>
      <div onClick={openPopup} className="card-send-checkbox-text">
        <span>{text}</span>
      </div>
    </div>
  );
};

export default Checkbox;
