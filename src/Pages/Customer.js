import React from "react";
import { Link } from "react-router-dom";
import Search from "../Parts/Search";

export default function Customer() {
  return (
    <div>
      <div className="bg-white py-6 lg:py-8">
        <div className="container px-6 mx-auto flex flex-col md:flex-row items-start md:items-center justify-between">
          <h4 className="text-2xl font-bold leading-tight text-gray-800 dark:text-gray-100">
            Customer
          </h4>
          <div className="flex gap-x-3">
            <Link to="/add-customer">
              <button className="px-5 py-2 bg-indigo-700 text-white rounded hover:bg-indigo-600 transition-duration-150 ease-in-out">
                Add Customer
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="my-10">
        <div className="mx-auto bg-white dark:bg-gray-800 shadow rounded">
          <div className="flex flex-col lg:flex-row p-4 lg:p-8 justify-between items-start lg:items-stretch w-full">
            <Search />
            <div className="w-full lg:w-2/3 flex flex-col lg:flex-row items-start lg:items-center justify-end">
              <div className="flex items-center lg:border-l lg:border-r border-gray-300 dark:border-gray-200 py-3 lg:py-0 lg:px-6">
                <p
                  className="text-base text-gray-600 dark:text-gray-400"
                  id="page-view"
                >
                  Viewing 1 - 20 of 60
                </p>
                <i
                  className="text-gray-600 dark:text-gray-400 ml-2 border-transparent border cursor-pointer rounded"
                  onclick="pageView(false)"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-chevron-left"
                    width={20}
                    height={20}
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <polyline points="15 6 9 12 15 18" />
                  </svg>
                </i>
                <i
                  className="text-gray-600 dark:text-gray-400 border-transparent border rounded focus:outline-none cursor-pointer"
                  onclick="pageView(true)"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-chevron-right"
                    width={20}
                    height={20}
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <polyline points="9 6 15 12 9 18" />
                  </svg>
                </i>
              </div>
            </div>
          </div>
          <div className="w-full overflow-x-scroll xl:overflow-x-hidden">
            <table className="min-w-full bg-white dark:bg-gray-800">
              <thead>
                <tr className="w-full h-16 border-gray-300 dark:border-gray-200 border-b py-8">
                  <th className="pl-8 text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4">
                    <input
                      type="checkbox"
                      className="cursor-pointer relative w-5 h-5 border rounded border-gray-400 dark:border-gray-200 bg-white dark:bg-gray-800 outline-none"
                      onclick="checkAll(this)"
                    />
                  </th>
                  <th className="text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4">
                    #
                  </th>
                  <th className="text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4">
                    Nama Customer
                  </th>
                  <th className="text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4">
                    Nomor Telepon
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* {InventoryListData.map((inventoryData, index) => { */}
                {/* return ( */}
                <tr
                  // key={index}
                  className="h-24 border-gray-300 dark:border-gray-200 border-b"
                >
                  <td className="pl-8 pr-6 text-left whitespace-no-wrap text-sm text-gray-800 dark:text-gray-100 tracking-normal leading-4">
                    <input
                      type="checkbox"
                      className="cursor-pointer relative w-5 h-5 border rounded border-gray-400 dark:border-gray-200 bg-white dark:bg-gray-800 outline-none"
                      onclick="tableInteract(this)"
                    />
                  </td>
                  <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">
                    {/* {inventoryData.IdProduk} */}
                  </td>
                  <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">
                    {/* {inventoryData.IdProduk} */}
                  </td>
                  <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">
                    {/* {inventoryData.IdProduk} */}
                  </td>
                  <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">
                    {/* {inventoryData.IdProduk} */}
                  </td>
                  <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">
                    {/* {inventoryData.IdProduk} */}
                  </td>
                  <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">
                    {/* {inventoryData.IdProduk} */}
                  </td>
                </tr>
                {/* ); })} */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
