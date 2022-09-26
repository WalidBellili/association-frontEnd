const Button = ({ type, text }) => {
  return (
    <button type={type} className="btn">
      {text}
    </button>
  );
};

export default Button;
