import React, { useEffect, useState } from "react";
import { navBarContent } from "../../constants";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

const Navbar = () => {
  const [showSubItem, setShowSubItem] = useState("Products");

  //   useEffect(() => {
  //     console.log(showSubItem);
  //   }, [showSubItem]);

  return (
    <div className="w-full relative bg-white-100">
      <div className="w-[70vw] mx-auto py-[20px] flex justify-between items-center">
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
              onClick={() =>
                setShowSubItem(showSubItem === null ? item.navItem : null)
              }
            >
              {/* Main Item */}
              <NavLink
                to={item.path}
                className="text-slate-700 hover:text-slate-900 p-[10px] hover:bg-slate-100 rounded-sm flex items-center gap-[7px]"
              >
                {item.navItem}
                {item.subItems &&
                  (showSubItem === item.navItem ? (
                    <IoIosArrowUp />
                  ) : (
                    <IoIosArrowDown />
                  ))}
              </NavLink>
            </div>
          ))}
        </nav>
      </div>
      {showSubItem && (
        <div
          className="bg-white flex justify-center gap-[50px] items-center absolute left-0 right-0 p-[40px] py-[20px] mx-auto w-full"
          style={{
            animation: "fadeIn 0.3s ease-in-out",
            transformOrigin: "center top",
          }}
        >
          {/* Conditional Rendering of Subitems */}
          <div className="flex gap-[10px] items-center">
            {navBarContent.map(
              (item) =>
                item.navItem === showSubItem &&
                item.subItems?.map((subItem, index) => {
                  return (
                    <NavLink
                      key={index}
                      className=" relative text-gray-700 w-[200px] h-[230px] overflow-hidden border-[0.5px] rounded-md p-[30px] "
                      style={{
                        listStyle: "none",
                      }}
                    >
                      <h1 className="z-[10] relative text-xl font-medium">
                        {subItem.label}
                      </h1>

                      <div className="absolute w-full h-[full] top-[30px] right-0 left-0 bottom-0 z-[1] ">
                        <img
                          src={subItem.imgSrc}
                          className="w-[200px] h-[230px] object-cover opacity-25"
                          alt=""
                        />
                        <div className="absolute inset-0 w-[200px] h-[230px] bg-gradient-to-b from-white to-transparent z-[5]"></div>
                      </div>
                    </NavLink>
                  );
                })
            )}
          </div>
          <div className="border-[0.5px] border-t-0 border-b-0 border-r-0  h-[230px]"></div>
          <div className="flex flex-col">
            <span className="text-2xl text-slate mb-[5px] font-medium tracking-wide">
              Lorem, ipsum.
            </span>
            <p className="w-[200px] text-xs leading-[18px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
              pariatur.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
