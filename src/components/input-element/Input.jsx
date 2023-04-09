const Input = (props) => {
  const {
    type,
    placeholder,
    id,
    accept,
    required,
    name,
    handleChange,
    value,
    min,
    max,
    className,
  } = props;
  return (
    <input
      id={id}
      type={type}
      name={name}
      onChange={handleChange}
      placeholder={placeholder}
      className={className}
      accept={accept}
      required={required}
      min={min}
      max={max}
    />
  );
};

/* Export Main Component */
export default Input;
