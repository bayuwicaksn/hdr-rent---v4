import React, { useState } from "react";
import ProdukInventory from "../../Parts/InventoryList/ProdukInventory";

const ProdukDetail = () => {
  const [activeStatus, setActiveStatus] = useState(1);

  return (
    <div>
      <div className="bg-white py-6 lg:py-8">
        <div className="container px-6 mx-auto flex flex-col md:flex-row items-start md:items-center justify-between">
          <h4 className="text-2xl font-bold leading-tight text-gray-800 dark:text-gray-100">
            EOS 850D
          </h4>
        </div>
      </div>
      <div className="justify-between flex-wrap sm:block bg-white">
        <div className="xl:w-full xl:mx-0 pl-5 pr-5 h-12">
          <ul className="flex">
            <li
              onClick={() => setActiveStatus(1)}
              className={
                activeStatus === 1
                  ? "text-sm text-indigo-700 flex flex-col justify-between border-indigo-700 pt-3 rounded-t mr-10 font-normal"
                  : "text-sm text-gray-600 py-3 mr-10 font-normal cursor-pointer hover:text-gray-800"
              }
            >
              <span className="mb-3 cursor-pointer">Inventory</span>
              {activeStatus === 1 && (
                <div className="w-full h-1 bg-indigo-700 rounded-t-md" />
              )}
            </li>
            <li
              onClick={() => setActiveStatus(2)}
              className={
                activeStatus === 2
                  ? "text-sm text-indigo-700 flex flex-col justify-between border-indigo-700 pt-3 rounded-t mr-10 font-normal"
                  : "text-sm text-gray-600 py-3 mr-10 font-normal cursor-pointer hover:text-gray-800"
              }
            >
              <span className="mb-3 cursor-pointer">Variasi</span>
              {activeStatus === 2 && (
                <div className="w-full h-1 bg-indigo-700 rounded-t-md" />
              )}
            </li>
            <li
              onClick={() => setActiveStatus(3)}
              className={
                activeStatus === 3
                  ? "text-sm text-indigo-700 flex flex-col justify-between border-indigo-700 pt-3 rounded-t mr-10 font-normal"
                  : "text-sm text-gray-600 py-3 mr-10 font-normal cursor-pointer hover:text-gray-800"
              }
            >
              <span className="mb-3 cursor-pointer">Harga</span>
              {activeStatus === 3 && (
                <div className="w-full h-1 bg-indigo-700 rounded-t-md" />
              )}
            </li>
            <li
              onClick={() => setActiveStatus(4)}
              className={
                activeStatus === 4
                  ? "text-sm text-indigo-700 flex flex-col justify-between border-indigo-700 pt-3 rounded-t mr-10 font-normal"
                  : "text-sm text-gray-600 py-3 mr-10 font-normal cursor-pointer hover:text-gray-800"
              }
            >
              <span className="mb-3 cursor-pointer">Settings</span>
              {activeStatus === 4 && (
                <div className="w-full h-1 bg-indigo-700 rounded-t-md" />
              )}
            </li>
            <li
              onClick={() => setActiveStatus(5)}
              className={
                activeStatus === 5
                  ? "text-sm text-indigo-700 flex flex-col justify-between border-indigo-700 pt-3 rounded-t mr-10 font-normal"
                  : "text-sm text-gray-600 py-3 mr-10 font-normal cursor-pointer hover:text-gray-800"
              }
            >
              <span className="mb-3 cursor-pointer">History</span>
              {activeStatus === 5 && (
                <div className="w-full h-1 bg-indigo-700 rounded-t-md" />
              )}
            </li>
          </ul>
        </div>
      </div>
      <div className="my-10">
        {activeStatus === 1 ? <ProdukInventory /> : ""}
      </div>
      <div className="my-10">{activeStatus === 2 ? "Variasi" : ""}</div>
      <div className="my-10">{activeStatus === 3 ? "Harga" : ""}</div>
      <div className="my-10">{activeStatus === 4 ? "Settings" : ""}</div>
      <div className="my-10">{activeStatus === 5 ? "History" : ""}</div>
    </div>
  );
};

export default ProdukDetail;
