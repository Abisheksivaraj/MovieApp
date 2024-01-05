import React from 'react'
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { LuSun } from "react-icons/lu";
import { FiLogOut } from "react-icons/fi";
import '../Styles/Sidebar.css'

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">
        <img
          src="https://www.shutterstock.com/image-vector/initial-letters-wt-shield-shape-260nw-559356823.jpg"
          alt=""
        />
      </div>

      <div className="icons">
        <ul>
          <li><IoHomeOutline/></li>
        <li><MdOutlineFavoriteBorder/></li>
        <li></li>
        <li><LuSun/></li>
        </ul>
      </div>

      <div className="logout">

        <FiLogOut/>

      </div>

    </div>
  );
}

export default Sidebar