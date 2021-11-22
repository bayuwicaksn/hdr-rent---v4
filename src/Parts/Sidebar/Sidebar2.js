import {Link} from 'react-router-dom'
import { SidebarData } from './SidebarData'
import * as AiIcons from 'react-icons/ai'

export default function Index() {

  return (
    <div className="bg-white">
      <div className="flex text-gray-800  hover:text-black focus:outline-none focus:text-black justify-between w-full p-6 items-center ">
        <button className="flex justify-between  items-center space-x-3">
        <i className="text-4xl"><AiIcons.AiOutlineCamera/></i>
          <p className="text-2xl leading-6 ">HDR Rent</p>
        </button>
      </div>
      <div className="xl:mt-6 flex flex-col justify-start items-start  px-4 w-full space-y-3 pb-5 ">
          {SidebarData.map((item, index) => {
         return (<Link to={item.Path} key={index} className="focus:outline-none flex jusitfy-start hover:text-white focus:bg-indigo-700 focus:text-white hover:bg-indigo-700 text-gray-600 rounded py-3 pl-4 items-center space-x-6 w-full ">
            <i className="text-2xl">{item.icon}</i>
            <p className="text-base leading-4 ">{item.title}</p>
         </Link>)
          })}
        </div>
    </div>
  );
}
