import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import * as AiIcons from "react-icons/ai";

export default function Index() {
  return (
    <div className="sticky top-0 h-screen shadow bg-gray-900">
      <div className="flex text-gray-800  hover:text-black focus:outline-none focus:text-black justify-between w-full py-6 px-10 items-center ">
        <button className="flex justify-between items-center space-x-3 text-white">
          <i className="text-4xl">
            <AiIcons.AiOutlineCamera />
          </i>
          <p className="text-2xl leading-6 whitespace-nowrap">HDR Rent</p>
        </button>
      </div>
      <div className="xl:mt-6 flex flex-col justify-start items-start px-4 space-y-3 pb-5">
        {SidebarData.map((item, index) => {
          return (
            <Link
              to={item.Path}
              key={index}
              className="flex text-gray-100 rounded py-3 px-3 items-center space-x-5 w-full hover:text-white hover:bg-indigo-700 focus:bg-indigo-700 focus:text-white focus:outline-none"
            >
              <i className="text-2xl">{item.icon}</i>
              <p className="text-base">{item.title}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
