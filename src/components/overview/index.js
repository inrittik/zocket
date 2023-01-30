import React from "react";
import Campaign1 from "../../assets/campaign1.png";
import ProfileP from "../../assets/pp.png";
import tick from "../../assets/tick.svg";
import thumb from "../../assets/thumb.svg"
import "./styles.css";

const Index = ({ active, setActive, ind }) => {
  return (
    <div
      className={`overview-card ${
        active === ind ? "overview-card-active" : ""
      }`}
      onClick={() => {
        setActive(ind);
      }}
    >
      <div className={active === ind ? "tick" : "no-tick"}>
        <img src={tick} alt="" />
      </div>
      <div className="head">
        <div className="dp">
          <img src={ProfileP} alt="" />
        </div>
        <div className="name">
          <div>Mukund Cake Shop</div>
          <div>Sponsored</div>
        </div>
      </div>
      <div className="body">
        <div className="content">
          We are the best bakery around you. Please like my page to get updates
          on exciting offers and discounts
        </div>
        <div className="img">
          <img src={Campaign1} alt="" />
          <div className="bar">
            <div>Mukund Cake Shop</div>
            <div className="like">
              <img src={thumb} alt="" />
              Like
            </div>
          </div>
        </div>
      </div>
      <div className={active === ind ? "foot" : "no-foot"}>
        <div className="btn">Change image</div>
        <div className="btn">Edit text</div>
      </div>
    </div>
  );
};

export default Index;
