import React from "react";
import { Link } from "react-router-dom";
import Search from "../Search";
import { ProdukLIstData } from "./ProdukListData";
import * as AiIcons from "react-icons/ai";

const ProductList = () => {
  return (
    <div>
      <div className="mx-auto bg-white dark:bg-gray-800 shadow rounded">
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
          </div>
        </div>
        {/* table */}
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
                        className="h-full w-full rounded-full overflow-hidden shadow"
                      />
                    </div>
                  </td>
                  <td className="pr-6">{dataProduk.IdProduk}</td>
                  <td className="pr-6">{dataProduk.NamaProduk}</td>
                  <td className="pr-6">{dataProduk.Kategori}</td>
                  <td className="pr-6">{dataProduk.Brand}</td>
                  <td className="pr-6">{dataProduk.Harga}</td>
                  <td className="pr-6">{dataProduk.Qty}</td>
                  <td className="p-0">
                    <Link to="/produk-detail">
                      <button className="text-sm leading-none text-gray-600 py-3 px-5 bg-gray-100 rounded hover:bg-gray-200 focus:outline-none">
                        Detail
                      </button>
                    </Link>
                  </td>
                  <td className="p-0">
                    <button className="text-sm leading-none text-gray-600 py-3 px-5 bg-red-300 rounded hover:bg-gray-200 focus:outline-none">
                      Delete
                    </button>
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
