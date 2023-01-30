import React from "react";
import tick from "../../assets/tick.svg";
import "./styles.css";

const Index = ({ name, desc, active, setActive, ind, img }) => {
  return (
    <div
      className={`type-cnt ${active === ind ? "type-active" : ""}`}
      onClick={() => setActive(ind)}
    >
      <div className={`${active === ind ? "tick" : "no-tick"}`}>
        <img src={tick} alt="" />
      </div>
      <div className={`"type-icon ${active === ind ? "type-icon-active" : ""}`}>{img}</div>
      <div className="type-content">
        <div className="content-main">{name}</div>
        <div className="content-desc">{desc}</div>
      </div>
    </div>
  );
};

export default Index;
