import React from "react";
import './styles.css'

const Select = ({label, options}) => {
  return (
    <div className="select">
      <div className={`${label===undefined?"no-label":"label"}`}>{label}</div>
      <div className="options">
        <div id="op1">{options}</div>
      </div>
    </div>
  );
};

export default Select;
