import React, { useState } from "react";
import "./Sidebar.css";
import Logo from "../imgs/logo.png";
import { UilSignOutAlt } from "@iconscout/react-unicons";
import { SidebarData } from "../Data/Data";
import { UilBars } from "@iconscout/react-unicons";
import { motion } from "framer-motion";
import {Link} from "react-router-dom";

const Sidebar = () => {
  const [selected, setSelected] = useState(0);

  const [expanded, setExpaned] = useState(true)
  const close=()=>{
  //  this.Window.close()
  window.open("about:blank", "_self");
window.close();
  }

  const sidebarVariants = {
    true: {
      left : '0'
    },
    false:{
      left : '-60%'
    }
  }
  // console.log(window.innerWidth)
  return (
    <>
      <div className="bars" style={expanded?{left: '60%'}:{left: '5%'}} onClick={()=>setExpaned(!expanded)}>
        <UilBars />
      </div>
    <motion.div className='sidebar'
    variants={sidebarVariants}
    animate={window.innerWidth<=768?`${expanded}`:''}
    >
      {/* logo */}
      <Link to="/" style={{textDecoration:"none",color:"#000"}}>
      <div className="logo">
        <img src={Logo} alt="logo" />
        <span>
          Sh<span>o</span>ps
        </span>
      </div>
      </Link>
      <div className="menu">
        {SidebarData.map((item, index) => {
          return (
            <div
              className={selected === index ? "menuItem active" : "menuItem"}
              key={index}
              onClick={() => setSelected(index)}
            >
             <Link to={item.rout}  className="Link">
              <item.icon />
              </Link> 
             <Link to={item.rout}  className="Link">
              <span>{item.heading}</span>
              </Link> 
            </div>
          );
        })}
        {/* signoutIcon */}
        <div className="menuItem">
          <UilSignOutAlt  onClick={close}/>
        </div>
      </div>
    </motion.div>
    </>
  );
};

export default Sidebar;
