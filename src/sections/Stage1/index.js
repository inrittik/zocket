import React from "react";
import CampaignType from "../../components/campaignType";
import { icons } from "../../utils/icons";
import "./styles.css";

const types = [
  {
    name: "Get Leads as calls",
    desc: "Reach broad audience and get leads through calls",
    img: icons.campaignIcons.calls
  },
  {
    name: "Get Leads as Facebook messages",
    desc: "Get more FB messages from Leads",
    img: icons.campaignIcons.messages
  },
  {
    name: "Increase page followers",
    desc: "Encourage customers to follow your page",
    img: icons.campaignIcons.followers
  },
  {
    name: "Get Customer Leads",
    desc: "Encourage customers to take action",
    img: icons.campaignIcons.leads
  },
  {
    name: "Get more youtube views",
    desc: "Increase organic views by obtaining user attention ",
    img: icons.campaignIcons.views
  },
  {
    name: "Get more website traffic",
    desc: "Get the right people to visit your website",
    img: icons.campaignIcons.traffic
  },
  {
    name: "Increase Live store traffic",
    desc: "Drive visits to local stores, restaurants & Dealerships",
    img: icons.campaignIcons.store
  },
  {
    name: "Increase your App installs",
    desc: "Get more installs, interactions for your app",
    img: icons.campaignIcons.app
  },
  {
    name: "Increase the catalogue sales",
    desc: "Drive the sales of your catalogue and get more leads",
    img: icons.campaignIcons.sales
  },
];

const Stage1 = () => {
  const [active, setActive] = React.useState(0);
  return (
    <div className="stage1-cnt">
      {types.map((type, ind) => {
        return <CampaignType key={ind} name={type.name} desc={type.desc} active={active} setActive={setActive} ind={ind} img={ type.img} />;
      })}
    </div>
  );
};

export default Stage1;
