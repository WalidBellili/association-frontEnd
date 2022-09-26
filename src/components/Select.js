import React from "react";

const Select = ({ onChange, options, value }) => {
  return (
    <div>
      <label htmlFor="select">Associations</label>
      <select onChange={onChange} value={value} id="select">
        <option value="">Choose an Association</option>
        {options.map((option) => {
          return <option value={option.value}>{option.text}</option>
        })}
      </select>
    </div>
  );
};

export default Select;
