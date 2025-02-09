import React, { useState } from "react";
import { navBarContent } from "../../constants";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [showSubItem, setShowSubItem] = useState(null);

  return (
    <div className="w-full relative bg-white-100">
      <div className="w-[70vw] mx-auto py-[40px] flex justify-between items-center">
        {/* Logo */}
        <div className="logo">
          <img
            src="/logo.png"
            alt="Logo"
            className="h-[70px] w-[70px] object-contain"
          />
        </div>

        {/* Navigation Items */}
        <nav className="flex gap-[30px]">
          {navBarContent.map((item, index) => (
            <div
              className="nav_item relative cursor-pointer"
              key={index}
              onMouseEnter={() => setShowSubItem(item.navItem)}
              onMouseLeave={() => setShowSubItem(null)}
            >
              {/* Main Item */}
              <NavLink
                to={item.path}
                className="text-slate-700 hover:text-slate-900 p-[10px] hover:bg-slate-100 rounded-sm "
              >
                {item.navItem}
              </NavLink>
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
