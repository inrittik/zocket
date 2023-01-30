import React from "react";
import Dashboard from "../../sections/dashboard";
import add from "../../assets/add.svg";
import Stage1 from "../../sections/Stage1";
import Stage2 from "../../sections/Stage2";
import Stage3 from "../../sections/Stage3";
import Stage4 from "../../sections/Stage4";
import Modal from "../../components/modal";
import { icons } from "../../utils/icons";
import "./styles.css";

const title = [
  {
    main: "Your Campaign",
    sub: "Check the list of campigns you created ",
  },
  {
    main: "Your Ad Campaign",
    sub: "Launch your ad in just 4 easy steps",
  },
];

const stages = [
  "What you want to do?",
  "Choose the Product",
  "Campaign Settings",
  "Ready to go",
];

const Index = () => {
  const [stage, setStage] = React.useState(0);
  const [open, setOpen] = React.useState(false);
  const handleContinue = () => {
    if (stage < 4) setStage(stage + 1);

    if (stage === 4) setOpen(true);
  };
  return (
    <div className="home-cnt">
      <div className="head">
        <div className="title">
          <div className="title-main">
            {stage > 0 ? title[1].main : title[0].main}
          </div>
          <div className="title-sub">
            {stage > 0 ? title[1].sub : title[0].sub}
          </div>
        </div>
        <div
          className={`${stage === 0 ? "create-btn" : "create-btn-inactive"}`}
          onClick={() => setStage(1)}
        >
          <img src={add} alt="" />
          Create new campaign
        </div>
      </div>
      {stage === 0 && <Dashboard />}
      {stage > 0 && (
        <div className="progress">
          {/* progress bar */}
          <div className="bar"></div>
          <div
            className="bar-active"
            style={{ width: `${(stage / 4) * 100}%` }}
          ></div>

          {/* stages icons */}
          <div className="stage-list">
            <div className={`${stage > 0 ? "stage-itm-active" : "stage-itm"}`}>
              {icons.timelineIcons.lamp}
            </div>
            <div className={`${stage > 1 ? "stage-itm-active" : "stage-itm"}`}>
              {icons.timelineIcons.bag}
            </div>
            <div className={`${stage > 2 ? "stage-itm-active" : "stage-itm"}`}>
              {icons.timelineIcons.appointments}
            </div>
            <div className={`${stage > 3 ? "stage-itm-active" : "stage-itm"}`}>
              {icons.timelineIcons.tick}
            </div>
          </div>

          {/* stages name */}
          <div className="stage-name">
            <div style={{ color: `${stage === 1 ? "black" : ""}` }}>
              What you want to do
            </div>
            <div style={{ color: `${stage === 2 ? "black" : ""}` }}>
              Choose product
            </div>
            <div style={{ color: `${stage === 3 ? "black" : ""}` }}>
              Campaign settings
            </div>
            <div style={{ color: `${stage === 4 ? "black" : ""}` }}>
              Ready to go
            </div>
          </div>
        </div>
      )}

      {/* stages of campaigning */}
      {stage > 0 && (
        <div className={`stage-main ${stage === 3 ? "stage-main-sm" : ""}`}>
          <div className="stage-head">
            <span className="stage-title" style={{ marginRight: "1rem" }}>
              {stages[stage - 1]}
            </span>
            <span className="stage-sub">(Step {stage} of 4)</span>
          </div>
          {stage === 1 && <Stage1 />}
          {stage === 2 && <Stage2 />}
          {stage === 3 && <Stage3 />}
          {stage === 4 && <Stage4 />}
        </div>
      )}

      {/* continue/start-campaign btn */}
      {stage > 0 && (
        <div className={`tail ${stage === 3 ? "tail-up" : ""}`}>
          <button className="continue" onClick={handleContinue}>
            {stage < 4 && `Continue`}
            {stage >= 4 && `Start Campaign`}
          </button>
        </div>
      )}

      {/* modal */}
      {open && <Modal open={open} setOpen={setOpen} />}
    </div>
  );
};

export default Index;
