import React from "react";

const TambahProduk = () => {
  return (
    <div className="flex flex-col">
      <div className="bg-white py-6 lg:py-8">
        <div className="container px-6 mx-auto flex flex-col md:flex-row items-start md:items-center justify-between">
          <div>
            <h4 className="text-2xl font-bold leading-tight text-gray-800 dark:text-gray-100">
              Tambah Produk
            </h4>
          </div>
          <div className="mt-6 md:mt-0">
            <button className="mr-3 bg-gray-200 dark:bg-gray-700 focus:outline-none transition duration-150 ease-in-out rounded hover:bg-gray-300 text-indigo-700 dark:hover:bg-gray-600 dark:text-indigo-600 px-5 py-2 text-sm">
              Reserved
            </button>
            <button className="transition focus:outline-none duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-8 py-2 text-sm">
              Pick up
            </button>
          </div>
        </div>
      </div>
      <div className="my-6 mx-auto container">
        <div className="flex items-center justify-center w-full">
          <div className="bg-white rounded-md shadow overflow-y-auto w-full">
            <div className="bg-gray-100 rounded-tl-md rounded-tr-md px-4 md:px-8 md:py-4 py-7 flex items-center justify-between">
              <p className="text-base font-semibold">Produk Informasi</p>
            </div>
            <div className="px-4 md:px-10 pt-6 md:pt-12 md:pb-4 pb-7">
              <div className="flex items-center justify-center">
                <div className="mx-auto w-11/12 md:w-2/3 max-w-lg">
                  <h1 className="text-center text-gray-800 dark:text-gray-100 font-lg font-bold tracking-normal leading-tight mb-4">
                    Upload Files
                  </h1>
                  <p className="mb-5 text-sm text-gray-600 dark:text-gray-400 text-center font-normal">
                    Tambah foto produk
                  </p>
                  <div className="flex flex-col items-center justify-center w-full mb-8 border border-dashed border-indigo-700 rounded-lg py-8">
                    <div className="cursor-pointer mb-5 text-indigo-700 dark:text-indigo-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-cloud-upload"
                        width={60}
                        height={60}
                        viewBox="0 0 24 24"
                        strokeWidth={1}
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <path d="M7 18a4.6 4.4 0 0 1 0 -9h0a5 4.5 0 0 1 11 2h1a3.5 3.5 0 0 1 0 7h-1" />
                        <polyline points="9 15 12 12 15 15" />
                        <line x1={12} y1={12} x2={12} y2={21} />
                      </svg>
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
                      {" "}
                      browse{" "}
                    </label>
                    <input
                      type="file"
                      className="hidden"
                      name="fileUpload"
                      id="fileUp"
                    />
                  </div>
                </div>
              </div>
              <form className="mt-11">
                <div className="flex items-center space-x-9">
                  <input
                    placeholder="Nama Produk"
                    className="w-1/2 focus:outline-none placeholder-gray-500 py-3 px-3 text-sm leading-none text-gray-800 bg-white border rounded border-gray-200"
                  />
                  <input
                    placeholder="Qty"
                    type="number"
                    min={0}
                    className="w-1/2 focus:outline-none placeholder-gray-500 py-3 px-3 text-sm leading-none text-gray-800 bg-white border rounded border-gray-200"
                  />
                </div>
                <div className="flex items-center space-x-9 mt-8">
                  <input
                    placeholder="Harga"
                    className="w-1/2 focus:outline-none placeholder-gray-500 py-3 px-3 text-sm leading-none text-gray-800 bg-white border rounded border-gray-200"
                  />
                  <div className="w-1/2 bg-white border rounded border-gray-200 py-2.5 px-3">
                    <select className="text-sm text-gray-500 w-full focus:outline-none">
                      <option selected disabled value>
                        Kategori
                      </option>
                      <option>Lighting</option>
                      <option>Misc</option>
                    </select>
                  </div>
                </div>
              </form>
              <div className="flex items-center justify-between mt-9">
                <button
                  onclick="popuphandler(false)"
                  className="px-6 py-3 bg-gray-400 hover:bg-gray-500 shadow rounded text-sm text-white"
                >
                  Cancel
                </button>
                <button className="px-6 py-3 bg-indigo-700 hover:bg-opacity-80 shadow rounded text-sm text-white">
                  Tambah Produk
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TambahProduk;
