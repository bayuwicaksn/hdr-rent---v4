import React from "react";
import { Link } from "react-router-dom";
import ProductList from "../../Parts/Produk-List/ProductList";

function Products() {
  return (
    <div>
      {/* header */}
      <div className="p-8 flex items-center justify-between bg-white rounded shadow">
        {/* page title */}
        <div>
          <h4 className="text-2xl font-bold">Products</h4>
        </div>
        {/* right menu */}
        <div className="flex gap-x-3">
          <button className="px-5 py-2 bg-gray-200 text-indigo-700 rounded hover:bg-gray-300 transition duration-150 ease-in-out">
            Download All
          </button>
          <Link to="/add-product">
            <button className="px-5 py-2 bg-indigo-700 text-white rounded hover:bg-indigo-600 transition-duration-150 ease-in-out">
              Add Product
            </button>
          </Link>
        </div>
      </div>
      {/* content */}
      <div className="w-full py-8">
        <ProductList />
      </div>
    </div>
  );
}

export default Products;
