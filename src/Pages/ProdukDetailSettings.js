import React from "react";

const ProdukDetailSettings = () => {
  return (
    <div className="flex flex-col">
      <div className="my-6 mx-auto container">
        <div className="flex items-center justify-center w-full">
          <div className="bg-white rounded-md shadow overflow-y-auto w-full">
            <div className="bg-gray-100 rounded-tl-md rounded-tr-md px-4 md:px-8 md:py-4 py-7 flex items-center justify-between">
              <p className="text-base font-semibold">Produk Informasi</p>
            </div>
            <div className="flex flex-row items-center w-full">
              <div className="w-full sm:w-1/2 p-8">
                <form className="">
                  <div className="flex flex-col items-center space-y-9">
                    <input
                      placeholder="Nama Produk"
                      className="w-1/2 focus:outline-none placeholder-gray-500 py-3 px-3 text-sm leading-none text-gray-800 bg-white border rounded border-gray-200"
                    />
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
                    <div className="w-1/2 py-3 space-x-9">
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
                </form>
              </div>
              <div className="w-full sm:w-1/2 p-8">
                <div className="flex items-center justify-center">
                  <div className="mx-auto w-11/12 md:w-2/3 max-w-lg">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProdukDetailSettings;
