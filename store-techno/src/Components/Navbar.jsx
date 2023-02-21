import React from 'react'
import "../Style/Dashboard.css"
// Import image files
import logo from "../Photo/logo-shopt.svg"
import menu from "../Photo/menu.svg"
import storeFrontBg from "../Photo/Nav-Link-bg-black.svg"
import bagHandle from "../Photo/bag-handle.svg"
import logoutIcon from "../Photo/logout-red.svg"
const Navbar = () => {
 return (
  <>
  {/* This navbar contains a list of icons for the logo, menu, storefront, shopping bag, and logout. 
  Each icon is displayed using an <img> tag with a specific className */}
   <nav className="navbar">
    <div className="icon_list">
         <img className="icon" src={logo} alt="Logo icon" />
         <img className="icon" src={menu} alt="Menu icon" />
         <img className="icon" src={storeFrontBg} alt="storefront icon" />
         <img className="icon" src={bagHandle} alt="Shopping bag handle icon" />
         <img className="icon" src={logoutIcon} alt="Log Out Icon" />
    </div>
   </nav>
  </>
 )
}

export default Navbar
