import "./checkbox.css";
import Input from "../input-element/Input";

const Checkbox = (props) => {
  const { text, handleCheck, name, required } = props;
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
      <div className="card-send-checkbox-text">{text}</div>
    </div>
  );
};

export default Checkbox;
