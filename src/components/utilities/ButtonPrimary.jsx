const ButtonPrimary = ({ children, style, click }) => {
  return (
    <button style={{ ...style }} className="button" onClick={click}>
      {children}
    </button>
  );
};
export default ButtonPrimary;
