import React from "react";
import Dashboard from "../Dashboard/Dashboard";
import "./MainDash.css";
import {Routes,Route,} from "react-router-dom";
import Orderlist from "../Order /Orderlist";
import Customer from "../Customer/Customer";
import Product from "../Products/Product";
import Analytical from "../Analyticals/Analytical";
const MainDash = () => {
  return (
    <div className="MainDash">
      <Routes>
        <Route path="/" element={ <Dashboard/>}/>
        <Route path="/orderlist" element={ <Orderlist/>}/>
        <Route path="/customers" element={ <Customer/>}/>
        <Route path="/products" element={ <Product/>}/>
        <Route path="/analytics" element={ <Analytical/>}/>
    
     </Routes>
    </div>
  );
};

export default MainDash;
