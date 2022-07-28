import React from "react";
import CustomerReview from "../CustomerReview/CustomerReview";
import Switchbtn from "../Switchbtn/Switchbtn";
import Updates from "../Updates/Updates";
import "./RightSide.css";

const RightSide = ({checked,setChecked}) => {
  return (
    <div className="RightSide">
      <Switchbtn checked={checked} setChecked={setChecked}/>
      <div>
        <h3>Updates</h3>

        <Updates />
      </div>
      <div>
        <h3>Customer Review</h3>
        <CustomerReview />
      </div>
    </div>
  );
};

export default RightSide;
