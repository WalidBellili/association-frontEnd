const TextArea = ({ label, type, value, placeholder, onChange }) => {
  return (
    <div>
      <label htmlFor="comment">{label}</label>
      <input
        type={type}
        onChange={onChange}
        id="comment"
        value={value}
        placeholder={placeholder}
      />
    </div>
  );
};

export default TextArea;
