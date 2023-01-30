import React from 'react'
import Campaign from '../../components/campaign';
import Select from '../../components/select'
import fb from '../../assets/fb.svg';
import yt from '../../assets/yt.svg';
import go from "../../assets/go.svg";
import './styles.css'

const campaigns = [
  {
    on: true,
    name: "Bluberry cake Campaign",
    createdAt: "14 Jul",
    dateRange: "25 jul 2020 - 01 Aug 2020",
    clicks: "300",
    budget: "INR 3,400",
    location: "Chennai",
    platform: fb,
    status: "Live Now",
  },
  {
    on: false,
    name: "Chocolate cake campaign",
    createdAt: "14 Jul",
    dateRange: "25 jul 2020 - 01 Aug 2020",
    clicks: "300",
    budget: "INR 3,400",
    location: "Chennai",
    platform: fb,
    status: "Paused",
  },
  {
    on: false,
    name: "Browine cake campaign",
    createdAt: "14 Jul",
    dateRange: "25 jul 2020 - 01 Aug 2020",
    clicks: "300",
    budget: "INR 3,400",
    location: "Chennai",
    platform: fb,
    status: "Live Now",
  },
  {
    on: false,
    name: "Pumpkin cake camapign",
    createdAt: "14 Jul",
    dateRange: "25 jul 2020 - 01 Aug 2020",
    clicks: "300",
    budget: "INR 3,400",
    location: "Chennai",
    platform: yt,
    status: "Exhausted",
  },
  {
    on: true,
    name: "Bluberry cake Campaign",
    createdAt: "14 Jul",
    dateRange: "25 jul 2020 - 01 Aug 2020",
    clicks: "300",
    budget: "INR 3,400",
    location: "Chennai",
    platform: go,
    status: "Live Now",
  },
];

const Index = () => {
  return (
    <div className="dashboard-main">
      <div className="dashboard-head">
        <div className="search-bar">
          <input
            type="text"
            name="campaign"
            id="campaign"
            palceholder="Search for the campaign"
          />
        </div>
        <div className="filters">
          <Select label="Platforms:" options="All Platforms" />
          <Select label="Status:" options="All Status" />
          <Select options="Last 30 days" />
        </div>
      </div>
      <div className="dashboard-body">
        <div className="headings">
          <input type="checkbox" name="" id="" />
          <div>On/Off</div>
          <div>Campaign</div>
          <div>Date-Range</div>
          <div>Click</div>
          <div>Budget</div>
          <div>Location</div>
          <div>Platform</div>
          <div>Status</div>
          <div>Actions</div>
        </div>
        <div className="cpg-list">
          {
            campaigns.map((campaign, idx) => {
              return <Campaign id={idx} {...campaign} />
            })
          }
        </div>
      </div>
    </div>
  );
}

export default Index