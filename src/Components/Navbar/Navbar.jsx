import React, { useState } from "react";
import { navBarContent } from "../../constants";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [showSubItem, setShowSubItem] = useState(null);

  return (
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
      <nav className="flex gap-[20px]">
        {navBarContent.map((item, index) => (
          <div
            className="relative cursor-pointer"
            key={index}
            onClick={() =>
              setShowSubItem(showSubItem === item.navItem ? null : item.navItem)
            }
          >
            {/* Main Item */}
            <NavLink
              to={item.path}
              className="text-slate-700 hover:text-slate-900"
            >
              {item.navItem}
            </NavLink>

            {/* Sub-Items */}
            {item.subItems && showSubItem === item.navItem && (
              <div
                className="absolute flex justify-center gap-[100px] w-[100vw] left-[-66.8vw] px-[50px] py-[80px]"
                style={{
                  animation:
                    "sub_item_box_appear 0.4s cubic-bezier(0.25, 1, 0.5, 1)",
                  transformOrigin: "center top",
                }}
              >
                {item.subItems.map((subItem, subIndex) => (
                  <NavLink
                    key={subIndex}
                    className="capitalize cursor-pointer text-slate-700 hover:text-slate-900"
                  >
                    {/* <img src={subItem.imgSrc} className="w-[70px] h-[70px] object-cover" alt="" /> */}
                    {subItem.label}
                  </NavLink>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </div>
  );
};

export default Navbar;
