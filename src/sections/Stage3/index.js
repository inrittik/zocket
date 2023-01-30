import React from "react";
import BudgestSlider from "../../components/budgetSlider";
import RadiusSlider from "../../components/radiusSlider";
import { icons } from "../../utils/icons";
import "./styles.css";

const Stage3 = () => {
  const [timeline, setTimeline] = React.useState(0);
  const [type, setType] = React.useState(1);
  return (
    <div className="settings-main">
      <div className="budget">
        <div className="head">
          <div className="no">1</div>
          <div className="title">Budget and dates info</div>
        </div>
        <div className="main">
          <div className="timeline">
            <div className="title">Budget Timeline</div>
            <div className="options">
              <div
                className={`${timeline === 0 ? "active" : ""}`}
                onClick={() => setTimeline(0)}
              >
                Lifetime
              </div>
              <div
                className={`${timeline === 1 ? "active" : ""}`}
                onClick={() => setTimeline(1)}
              >
                Daily
              </div>
            </div>
          </div>
          <div className="dates">
            <div className="startDate">
              <div className="label">Start date</div>
              <input type="date" name="startDate" id="" />
            </div>
            <div className="endDate">
              <div className="label">End date</div>
              <input type="date" name="endDate" id="" />
            </div>
          </div>
          <div className="budgetRange">
            <div className="title">Enter campaign budget</div>
            <div>INR</div>
          </div>
          <BudgestSlider />
          <div className="budgetRange">
            <div>100</div>
            <div>1,00,000</div>
          </div>
        </div>
      </div>
      <div className="location">
        <div className="head">
          <div className="no">2</div>
          <div className="title">Location info</div>
        </div>
        <div className="main">
          <div className="type">
            <div className="title">Location type</div>
            <div className="options">
              <div
                className={`${type === 0 ? "active" : ""}`}
                onClick={() => setType(0)}
              >
                Location
              </div>
              <div
                className={`${type === 1 ? "active" : ""}`}
                onClick={() => setType(1)}
              >
                Radius
              </div>
            </div>
          </div>
          <div className="select-location">
            <div className="title">Select Location</div>
            <div className="search">
              <input
                type="text"
                name=""
                id=""
                placeholder="Select a place name, address or coordinates"
              />
              {icons.gps}
            </div>
          </div>
          <div className="target">
            <div className="title">Select target radius</div>
            <RadiusSlider />
            <div className="radiusRange">
              <div>1</div>
              <div>30</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stage3;
