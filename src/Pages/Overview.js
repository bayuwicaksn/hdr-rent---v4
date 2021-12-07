import React from "react";
import FeaturedInfo from "../Parts/FeaturedInfo";

function Overview() {
  return (
    <div>
      {/* header */}
      <div className="p-8 flex items-center justify-between bg-white rounded shadow">
        {/* page title */}
        <div>
          <h4 className="text-2xl font-bold">Dashboard</h4>
        </div>
        {/* right menu */}
        <div className="flex gap-x-3">
          <button className="px-5 py-2 bg-gray-200 text-indigo-700 rounded hover:bg-gray-300 transition duration-150 ease-in-out">
            Reserved
          </button>
          <button className="px-5 py-2 bg-indigo-700 text-white rounded hover:bg-indigo-600 transition-duration-150 ease-in-out">
            Pick up
          </button>
        </div>
      </div>
      <div className="py-6 lg:py-8">
        <div>
          <FeaturedInfo />
        </div>
      </div>
    </div>
  );
}

export default Overview;
