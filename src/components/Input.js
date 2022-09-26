const Input = ({ label, type, value, placeholder, onChange }) => {
  return (
    <div>
      <label htmlFor="name">{label}</label>
      <input
        type={type}
        onChange={onChange}
        id="name"
        value={value}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
