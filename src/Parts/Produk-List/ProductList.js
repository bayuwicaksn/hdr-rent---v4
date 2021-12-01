import React from "react";
import { Link } from "react-router-dom";
import Search from "../Search";
import { ProdukLIstData } from "./ProdukListData";
import * as AiIcons from "react-icons/ai";

const ProductList = () => {
  return (
    <div className="w-full bg-white dark:bg-gray-800 shadow rounded">
      <div className="p-8 flex justify-between">
        {/* left menu */}
        <Search />
        {/* right menu */}
        <div className="flex items-center gap-x-5">
          <div className="flex items-center gap-x-2 px-5 border-l border-r">
            <p className="">Viewing 1 - 20 of 60</p>
            <i className="cursor-pointer">
              <AiIcons.AiOutlineLeft />
            </i>
            <i className="cursor-pointer">
              <AiIcons.AiOutlineRight />
            </i>
          </div>
          <div className="relative flex items-center gap-1 px-5 py-2 bg-indigo-700 text-white rounded hover:bg-indigo-600 transition-duration-150 ease-in-out select-none cursor-pointer">
            <div>Sort</div>
            <div className="text-base">
              <AiIcons.AiOutlineSortAscending />
            </div>
            {/* <div className="absolute flex flex-col gap-y-1 top-12 right-0 px-5 py-3 whitespace-nowrap bg-white shadow rounded  text-gray-600">
                <div>Product a - z</div>
                <div>Product z - a</div>
              </div> */}
          </div>
        </div>
      </div>
      {/* table */}
      <div className="w-full overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="w-full h-16 border-b">
              <th className="pl-8 pr-6 text-left">
                <input
                  type="checkbox"
                  className="cursor-pointer w-4 h-4 rounded focus:ring-offset-0"
                />
              </th>
              <th className=""></th>
              <th className="font-normal text-left">Id Product</th>
              <th className="font-normal text-left">Product Name</th>
              <th className="font-normal text-left">Category</th>
              <th className="font-normal text-left">Brand</th>
              <th className="font-normal text-left">Price</th>
              <th className="font-normal text-left">Qty</th>
              <th className="font-normal text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {ProdukLIstData.map((dataProduk, index) => {
              return (
                <tr key={index} className="h-24 border-gray-300 border-b">
                  <td className="pl-8 pr-6 text-left">
                    <input
                      type="checkbox"
                      className="cursor-pointer w-4 h-4 rounded focus:ring-offset-0"
                    />
                  </td>
                  <td className="pr-6">
                    <div className="h-8 w-8">
                      <img
                        src={dataProduk.FotoProduk}
                        alt=""
                        className="h-full w-full rounded-full shadow"
                      />
                    </div>
                  </td>
                  <td className="pr-3 lg:pr-6">{dataProduk.IdProduk}</td>
                  <td className="pr-3 lg:pr-6 whitespace-nowrap">
                    <Link to="/detail-product">{dataProduk.NamaProduk}</Link>
                  </td>
                  <td className="pr-3 lg:pr-6">{dataProduk.Kategori}</td>
                  <td className="pr-3 lg:pr-6">{dataProduk.Brand}</td>
                  <td className="pr-3 lg:pr-6">{dataProduk.Harga}</td>
                  <td className="pr-3 lg:pr-6">{dataProduk.Qty}</td>
                  <td className="pr-3 lg:pr-6">
                    <div className="flex gap-1">
                      <Link to="/detail-product">
                        <div className="text-indigo-600 text-xl" title="Detail">
                          <AiIcons.AiOutlineEye />
                        </div>
                      </Link>
                      <div className="text-red-600 text-xl" title="Delete">
                        <AiIcons.AiOutlineDelete />
                      </div>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductList;
