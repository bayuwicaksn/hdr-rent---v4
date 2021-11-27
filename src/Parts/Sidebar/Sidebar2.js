import { NavLink } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import * as AiIcons from "react-icons/ai";

export default function Index() {
  return (
    <div className="sticky top-0 h-screen shadow bg-gray-900">
      <div className="w-full py-6 lg:px-10 flex justify-between items-center">
        <button className="flex justify-center items-center w-full space-x-3 text-white">
          <i className="text-4xl">
            <AiIcons.AiOutlineCamera />
          </i>
          <p className="text-2xl whitespace-nowrap hidden lg:block">HDR Rent</p>
        </button>
      </div>
      <div className="xl:mt-6 flex flex-col justify-start items-start px-4 space-y-3 pb-5">
        {SidebarData.map((item, index) => {
          return (
            <NavLink
              to={item.Path}
              key={index}
              exact={true}
              className="flex items-center space-x-5 py-3 px-3 w-full text-gray-100 rounded hover:text-white hover:bg-indigo-700"
              activeClassName="bg-indigo-700 "
            >
              <i className="text-2xl">{item.icon}</i>
              <p className="text-base hidden lg:block">{item.title}</p>
            </NavLink>
          );
        })}
      </div>
    </div>
  );
}
