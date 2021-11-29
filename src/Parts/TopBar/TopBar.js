import React, { useEffect, useRef, useState } from "react";
import {} from "react-icons";
import * as AiIcons from "react-icons/ai";
import * as MdIcons from "react-icons/md";
import { useToggleSidebar } from "../../Context/SidebarContext";

const TopBar = () => {
  const dropDownRef = useRef(null);
  const [toggle, seToggle] = useState(false);
  const toggleSidebar = useToggleSidebar();

  useEffect(() => {
    const handleClick = (e) => {
      if (!dropDownRef.current.contains(e.target)) {
        seToggle(!toggle);
      }
    };

    if (toggle) {
      window.addEventListener("click", handleClick);
    }

    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, [toggle]);

  const handleClick = () => {
    seToggle(!toggle);
  };

  return (
    <nav className="bg-white shadow sticky top-0 h-16 z-30 px-5 lg:px-10">
      <div className="flex h-full justify-between items-center">
        <div className="text-xl cursor-pointer" onClick={toggleSidebar}>
          <AiIcons.AiOutlineMenu />
        </div>
        <div className="flex h-full items-center">
          <div className="w-20 flex items-center justify-center border-l h-full text-2xl">
            <div className="relative">
              <AiIcons.AiOutlineBell />
              <div className="w-2 h-2 rounded-full bg-red-400 border border-white absolute top-0 right-0.5"></div>
            </div>
          </div>
          <div className="w-20 flex items-center justify-center border-l h-full text-2xl">
            <AiIcons.AiOutlineComment />
          </div>
          {/* profile menu */}
          <div className="flex pl-5 items-center justify-center border-l h-full gap-x-3">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1529068755536-a5ade0dcb4e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1481&q=80"
                alt="john doe"
                width="35"
                className="rounded-full shadow"
              />

              <div className="w-2.5 h-2.5 rounded-full border bg-green-500 border-white absolute top-0 -right-1"></div>
            </div>
            <div
              className="flex items-center cursor-pointer relative select-none"
              onClick={handleClick}
              ref={dropDownRef}
            >
              <div>John Doe</div>
              <MdIcons.MdOutlineKeyboardArrowDown className="text-lg mt-0.5" />
              {/* hidden menu */}
              {toggle && (
                <div className="absolute w-44 flex flex-col gap-y-1 top-14 right-0 bg-white px-5 py-3 shadow rounded">
                  <div className="flex gap-x-3 items-center">
                    <div>
                      <AiIcons.AiOutlineUser />
                    </div>
                    <div className="whitespace-nowrap capitalize">
                      my profile
                    </div>
                  </div>
                  <div className="flex gap-x-3 items-center">
                    <div>
                      <AiIcons.AiOutlineImport />
                    </div>
                    <div className="whitespace-nowrap capitalize">sign out</div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TopBar;
