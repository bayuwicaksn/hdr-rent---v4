import React from "react";
import * as AiIcons from "react-icons/ai";

export default function FeaturedInfo() {
  return (
    <div className="flex">
      <div className="w-full xl:w-1/3">
        <div className="flex flex-col p-5 shadow-xl bg-white">
          <div className="flex flex-row text-5xl text-green-500">
            <AiIcons.AiOutlineSend />
          </div>
          <div className="mt-8">
            <h5 className="font-bold text-5xl">235</h5>
            <p className="font-bold uppercase text-gray-600">Items Out</p>
          </div>
        </div>
      </div>
      <div className="w-full xl:w-1/3 px-6">
        <div className="flex flex-col p-5 shadow-xl bg-white">
          <div className="flex flex-row text-5xl text-yellow-500">
            <AiIcons.AiOutlineBook />
          </div>
          <div className="mt-8">
            <h5 className="font-bold text-5xl">235</h5>
            <p className="font-bold uppercase text-gray-600">Items Reserved</p>
          </div>
        </div>
      </div>
      <div className="w-full xl:w-1/3">
        <div className="flex flex-col p-5 shadow-xl bg-white">
          <div className="flex flex-row text-5xl text-red-500">
            <AiIcons.AiOutlineCheckSquare />
          </div>
          <div className="mt-8">
            <h5 className="font-bold text-5xl">235</h5>
            <p className="font-bold uppercase text-gray-600">Items Return</p>
          </div>
        </div>
      </div>
    </div>
  );
}
