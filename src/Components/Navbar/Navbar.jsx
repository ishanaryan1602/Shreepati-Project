import React, { useState } from "react";
import { navBarContent } from "../../constants";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [showSubItem, setShowSubItem] = useState(null);
  const [isLeaving, setIsLeaving] = useState(false);

  const handleMouseEnter = (navItem) => {
    setIsLeaving(false);
    setShowSubItem(navItem);
  };

  const handleMouseLeave = () => {
    setIsLeaving(true);
    setTimeout(() => {
      setShowSubItem(null);
      setIsLeaving(false);
    }, 500);
  };

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
              onMouseEnter={() => handleMouseEnter(item.navItem)}
              onMouseLeave={handleMouseLeave}
            >
              {/* Main Item */}
              <NavLink
                to={item.path}
                className="text-slate-700 hover:text-slate-900 p-[10px] hover:bg-slate-100 rounded-sm "
              >
                {item.navItem}
              </NavLink>

              {/* Sub-Items */}
              {item.subItems && showSubItem === item.navItem && (
                //hover div active show
                <div
                  className={`hover_div rounded-l-2xl rounded-r-2xl absolute flex justify-center gap-[50px] w-screen px-[50px] py-[80px] bg-white-100 shadow-md
                ${isLeaving ? "fade-out" : "fade-in"}`}
                  style={{
                    top: "100%",
                    right: "-663%",
                    transform: "translateX(663%)",
                  }}
                >
                  {/* sub-item box */}
                  <div className="flex gap-[12px]">
                    {item.subItems.map((subItem, subIndex) => (
                      <NavLink
                        key={subIndex}
                        className="capitalize cursor-pointer relative text-slate-700 overflow-hidden rounded-[4px] p-[30px] border-[0.5px] hover:text-slate-900 h-[250px] w-[250px] bg-slate-100"
                      >
                        {/* Background Image with Gradient Overlay */}
                        <div className="absolute inset-0">
                          <img
                            src={subItem.imgSrc}
                            className="w-full h-full object-cover opacity-50"
                            alt=""
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/90 to-white"></div>
                        </div>

                        {/* Foreground Content */}
                        <div className="relative z-10">
                          <p className="text-[22px] mb-[4px] font-medium">
                            {subItem.label}
                          </p>
                          <div className="flex flex-col text-xs gap-[2px]">
                            {subItem.smallTexts?.map((textArray) => (
                              <span>Solid State Drive</span>
                            ))}
                          </div>
                        </div>
                      </NavLink>
                    ))}
                  </div>

                  <div className="h-[250px] w-[1px] bg-slate-300"></div>
                  <div className="flex flex-col justify-between">
                    <div className="flex flex-col">
                      <p className="text-2xl mb-[10px] font-medium">
                        One stop shop!
                      </p>
                      <div className="flex flex-col gap-[10px] text-xs w-[150px] text-left">
                        Your one-stop shop for everything storage from hard
                        drives to pendrives, we've got you covered!
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
