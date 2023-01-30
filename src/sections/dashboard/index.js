import React from 'react'
import Campaign from '../../components/campaign';
import Select from '../../components/select'
import fb from '../../assets/fb.svg';
import yt from '../../assets/yt.svg';
import go from "../../assets/go.svg";
import './styles.css'
import SearchBar from '../../components/searchBar';

const arr = [
  {
    id: 0,
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
    id: 1,
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
    id: 2,
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
    id: 3,
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
    id: 4,
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
  const [campaigns, setCampaigns] = React.useState(arr);

  return (
    <div className="dashboard-main">
      <div className="dashboard-head">
        <div className="search-bar">
          <SearchBar placeholder="Search for the campaign" />
        </div>
        <div className="filters">
          <Select label="Platforms:" />
          <Select label="Status:" options="All Status" />
          <Select label="Last 30 days:"  options="Last 30 days" />
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
          {campaigns.map((campaign, idx) => {
            return (
              <Campaign
                key={idx}
                {...campaign}
                campaigns={campaigns}
                setCampaigns={setCampaigns}
                id={campaign.id}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Index