import "./select.css";

const Select = (props) => {
  const { text, options, name, handleChange } = props;
  return (
    <select onChange={handleChange} name={name} required className="item-input">
      <option value="">
        <p className="item-input-text">{text}</p>
      </option>
      {options.map((esyaFeature, index) => {
        return <option key={index}>{esyaFeature}</option>;
      })}
    </select>
  );
};

export default Select;
