import React from "react";
import tickSelect from "../../assets/tick.svg";
import tick from "../../assets/tick-grey.svg";
import "./styles.css";

const index = ({ ind, name, price, active, setActive, img }) => {
  return (
    <div
      className={`product-cnt ${active === ind ? "product-active" : ""}`}
      onClick={() => setActive(ind)}
    >
      <div className="product-icon">
        <img src={img} alt="" />
      </div>
      <div className="product-content">
        <div className="content-main">{name}</div>
        <div className="content-desc">{price}</div>
      </div>
      <div className="tick">
        <img src={active === ind ? tickSelect : tick} alt="" />
      </div>
    </div>
  );
};

export default index;
