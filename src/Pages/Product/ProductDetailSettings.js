import React from "react";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";

const ProductDetailSettings = () => {
  return (
    <div className="my-8 bg-white rounded overflow-hidden shadow">
      {/* title */}
      <div>
        <p className="px-8 py-4 bg-gray-100 text-base font-semibold">
          Update Product
        </p>
      </div>
      {/* content */}
      <div className="pt-8 pb-16 px-16 grid lg:grid-cols-2 gap-y-5 gap-x-14">
        {/* left */}
        <div>
          <form className="flex flex-col gap-y-3">
            <div>
              <label htmlFor="productname">Product Name</label>
              <input
                className="_input"
                type="text"
                placeholder="Product Name"
                id="productname"
              />
            </div>
            <div>
              <label htmlFor="qty">Qty</label>
              <input
                className="_input"
                type="number"
                placeholder="Qty"
                id="qty"
              />
            </div>
            <div>
              <label htmlFor="pricing">Pricing</label>
              <input
                className="_input"
                type="number"
                placeholder="Pricing"
                id="pricing"
              />
            </div>
            <div>
              <label htmlFor="category">Category</label>
              <select className="_input">
                <option selected disabled value>
                  Category
                </option>
                <option>Lighting</option>
                <option>Misc</option>
              </select>
            </div>
          </form>
        </div>
        {/* right */}
        <div className="grid content-end">
          <div className="w-full mx-auto">
            <div className="w-full mb-8 py-8 flex flex-col items-center justify-center border border-dashed border-indigo-700 rounded-lg">
              <div className="cursor-pointer mb-5 text-indigo-700 text-7xl">
                <AiIcons.AiOutlineCloudUpload />
              </div>
              <p className="text-base font-normal tracking-normal text-gray-800 dark:text-gray-100 text-center">
                Drag and drop here
              </p>
              <p className="text-base font-normal tracking-normal text-gray-800 dark:text-gray-100 text-center my-1">
                or
              </p>
              <label
                htmlFor="fileUp"
                className="cursor-pointer text-base font-normal tracking-normal text-indigo-700 dark:text-indigo-600 text-center"
              >
                Browse
              </label>
              <input
                type="file"
                className="hidden"
                name="fileUpload"
                id="fileUp"
              />
            </div>
          </div>
          {/* action */}
          <div className="flex gap-3">
            <Link
              to="/products"
              className="w-1/2 px-5 py-3 text-center bg-gray-200 text-indigo-700 rounded hover:bg-gray-300 transition duration-150 ease-in-out"
            >
              Cancel
            </Link>
            <button className="w-1/2 px-5 py-3 bg-indigo-700 text-white rounded hover:bg-indigo-600 transition-duration-150 ease-in-out">
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailSettings;
