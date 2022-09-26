import React from "react";

const Select = ({ onChange, options, value }) => {
  return (
    <select onChange={onChange} value={value}>
      <option value="">Choose an Association</option>
      {options.map((option) => {
        return <option value={option.value}>{option.text}</option>;
      })}
    </select>
  );
};

export default Select;
