const Button = (props) => {
  const { className, type, onClick, children } = props;
  return (
    <button onClick={onClick} type={type} className={className}>
      {children}
    </button>
  );
};

export default Button;
