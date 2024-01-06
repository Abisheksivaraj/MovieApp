import React from 'react'
import { Link } from 'react-router-dom';
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { LuSun } from "react-icons/lu";
import { FiLogOut } from "react-icons/fi";
import logo from "../assets/logo.png"
import { TbCategory2 } from "react-icons/tb";
import '../Styles/Sidebar.css'

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">
        <img src={logo} alt="" />
      </div>

      <div className="icons">
        <ul>
          <li>
            <IoHomeOutline />
          </li>
          <li>
            <MdOutlineFavoriteBorder />
          </li>
          <li><TbCategory2/></li>
          <li>
            <LuSun />
          </li>
        </ul>
      </div>

      <div className="logout">
        <FiLogOut />
      </div>
    </div>
  );
}

export default Sidebar