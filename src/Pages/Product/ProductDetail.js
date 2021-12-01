import React, { useState } from "react";
import ProductDetailSettings from "./ProductDetailSettings";
import ProductDetailHistory from "./ProductDetailHistory";
import ProductInventory from "./ProductInventory";

const ProductDetail = () => {
  const [activeStatus, setActiveStatus] = useState(1);

  return (
    <div>
      <div className="bg-white p-8 pb-0 rounded shadow">
        <div>
          <h4 className="text-2xl font-bold">EOS 850D</h4>
        </div>
        {/* menu */}
        <div className="mt-5">
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
              <span className="mb-3 cursor-pointer">Settings</span>
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
              <span className="mb-3 cursor-pointer">History</span>
              {activeStatus === 3 && (
                <div className="w-full h-1 bg-indigo-700 rounded-t-md" />
              )}
            </li>
          </ul>
        </div>
      </div>

      <div className="my-10">
        {activeStatus === 1 ? <ProductInventory /> : ""}
      </div>
      <div className="my-10">
        {activeStatus === 2 ? <ProductDetailSettings /> : ""}
      </div>
      <div className="my-10">
        {activeStatus === 3 ? <ProductDetailHistory /> : ""}
      </div>
    </div>
  );
};

export default ProductDetail;
