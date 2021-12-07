import React from "react";
import * as AiIcons from "react-icons/ai";

export default function FeaturedInfo() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-3">
      {/* card */}
      <div className="flex flex-col p-5 shadow rounded bg-white">
        <div className="flex text-5xl text-yellow-500">
          <AiIcons.AiOutlineBook />
        </div>
        <div className="mt-6">
          <h5 className="font-bold text-3xl">235</h5>
          <p className="text-base mt-1">Items Reserved</p>
        </div>
      </div>
      {/* card */}
      <div className="flex flex-col p-5 shadow rounded bg-white">
        <div className="flex text-5xl text-green-500">
          <AiIcons.AiOutlineDollar />
        </div>
        <div className="mt-6">
          <h5 className="font-bold text-3xl">IDR 3.120.000</h5>
          <div className="flex items-end gap-2">
            <p className="text-base mt-1">Weekly Earnings</p>
            <div className="flex items-center text-green-500">
              <div>
                <AiIcons.AiFillCaretUp />
              </div>
              <p>5%</p>
            </div>
          </div>
        </div>
      </div>
      {/* card */}
      <div className="flex flex-col p-5 shadow rounded bg-white">
        <div className="flex text-5xl text-indigo-500">
          <AiIcons.AiOutlineUser />
        </div>
        <div className="mt-6">
          <h5 className="font-bold text-3xl">72</h5>
          <div className="flex items-end gap-2">
            <p className="text-base mt-1">Customer</p>
            <div className="flex items-center text-indigo-500">
              <div className="text-xs">
                <AiIcons.AiOutlinePlus />
              </div>
              <p>3 On Today</p>
            </div>
          </div>
        </div>
      </div>
      {/* card */}
      <div className="flex flex-col p-5 shadow rounded bg-white">
        <div className="flex text-5xl text-red-500">
          <AiIcons.AiOutlineDropbox />
        </div>
        <div className="mt-6">
          <h5 className="font-bold text-3xl">41</h5>
          <div className="flex justify-between items-center">
            <p className="text-base mt-1">Items Out</p>
            <div className="py-1 px-2 rounded bg-gray-200 text-indigo-500 cursor-pointer">
              Detail
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
