import React from 'react'
import './styles.css'
import logo from '../../assets/logo.svg'
import home from '../../assets/home.svg'
import campaign from "../../assets/campaign.svg";
import products from "../../assets/products.svg";
import customers from "../../assets/customers.svg";

const Index = () => {
  return (
    <div className="sidebar">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="menu">
        <div className="menu-itm">
          <img src={home} alt="" />
          <div className="name">Home</div>
        </div>
        <div className="menu-itm">
          <img src={campaign} alt="" />
          <div className="name">Campaign</div>
        </div>
        <div className="menu-itm">
          <img src={products} alt="" />
          <div className="name">Products</div>
        </div>
        <div className="menu-itm">
          <img src={customers} alt="" />
          <div className="name">Customers</div>
        </div>
      </div>
    </div>
  );
}

export default Index