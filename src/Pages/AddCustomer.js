import React from "react";

const AddCustomer = () => {
  return (
    <div>
      <div className="bg-white py-6 lg:py-8">
        <div className="container px-6 mx-auto flex flex-col md:flex-row items-start md:items-center justify-between">
          <h4 className="text-2xl font-bold leading-tight text-gray-800 dark:text-gray-100">
            Add Customer
          </h4>
        </div>
      </div>
      <div className="w-full bg-white p-10 my-10">
        <h1 className="text-2xl">Profil Info</h1>
        <div className="mt-8 md:flex items-center">
          <div className="flex flex-col">
            <label className="mb-3 text-sm leading-none text-gray-800">
              First name
            </label>
            <input
              type="name"
              tabIndex={0}
              aria-label="Enter first name"
              className="w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200"
              defaultValue="William"
            />
          </div>
          <div className="flex flex-col md:ml-12 md:mt-0 mt-8">
            <label className="mb-3 text-sm leading-none text-gray-800">
              Last name
            </label>
            <input
              type="name"
              tabIndex={0}
              aria-label="Enter last name"
              className="w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200"
              defaultValue="Smith"
            />
          </div>
        </div>
        <div className="mt-12 md:flex items-center">
          <div className="flex flex-col">
            <label className="mb-3 text-sm leading-none text-gray-800">
              Email Address
            </label>
            <input
              type="email"
              tabIndex={0}
              aria-label="Enter email Address"
              className="w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200"
              defaultValue="smith.william@gmail.com"
            />
          </div>
          <div className="flex flex-col md:ml-12 md:mt-0 mt-8">
            <label className="mb-3 text-sm leading-none text-gray-800">
              Phone number
            </label>
            <input
              type="number"
              tabIndex={0}
              aria-label="Enter phone number"
              className="w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200"
              defaultValue="+81 839274"
            />
          </div>
        </div>
        <div className="mt-12 md:flex items-center">
          <div className="flex flex-col">
            <label className="mb-3 text-sm leading-none text-gray-800">
              Date of birth
            </label>
            <input
              type
              tabIndex={0}
              aria-label="Enter date of birth"
              className="w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200"
              defaultValue="28.03.1997"
            />
          </div>
          <div className="flex flex-col md:ml-12 md:mt-0 mt-8">
            <label className="mb-3 text-sm leading-none text-gray-800">
              Place of birth
            </label>
            <input
              type="name"
              tabIndex={0}
              aria-label="Enter place of birth"
              className="w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200"
              defaultValue="San Diego, CA, USA"
            />
          </div>
        </div>
        <button className="my-10 px-5 py-2 bg-indigo-700 text-white rounded hover:bg-indigo-600 transition-duration-150 ease-in-out">
          Add Customer
        </button>
      </div>
    </div>
  );
};

export default AddCustomer;
