const Input = (props) => {
  const {
    type,
    placeholder,
    id,
    accept,
    required,
    name,
    handleChange,
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
    />
  );
};

/* Export Main Component */
export default Input;
