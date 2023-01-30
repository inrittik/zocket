import React from "react";
import "./styles.css";
import plan from "../../assets/plan.svg";
import notification from "../../assets/notification.svg";
import gift from "../../assets/gift.svg";
import profile from "../../assets/profile.svg";
import dp from "../../assets/dp.png";

const Index = () => {
  return (
    <div className="titlebar">
      <div className="trial">Free trial ends in 2 days</div>
      <div className="plan">
        <img src={plan} alt="" />
        <span>Buy Plan</span>
      </div>
      <img src={gift} alt="" />
      <img src={notification} alt="" />
      <div className="profile">
        <img src={dp} alt="" />
        <div className="name">Mukund cake shop</div>
      </div>
      <img src={profile} alt="" />
    </div>
  );
};

export default Index;
