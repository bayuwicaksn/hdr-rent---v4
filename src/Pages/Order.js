import React, { useCallback, useState } from "react";
import DatePicker from "../Parts/DatePicker";
import * as AiIcons from "react-icons/ai";
import moment from "moment";
import Search from "../Parts/Search";
import QtyBtn from "../Parts/QtyBtn";

function Order() {
  const [showDate, setShowDate] = useState(false);
  const [date, setDate] = useState({ startDate: "", endDate: "" });

  const changeDate = (state) => {
    let startDate = moment(state[0].startDate).format("DD-MM-YYYY");
    let endDate = moment(state[0].endDate).format("DD-MM-YYYY");
    setDate({ startDate, endDate });
  };

  const memoizedChangeDate = useCallback(changeDate, []);

  return (
    <div>
      <div className="bg-white py-6 lg:py-8">
        <div className="container px-6 mx-auto flex flex-col md:flex-row items-start md:items-center justify-between">
          <div>
            <h4 className="text-2xl font-bold leading-tight text-gray-800 dark:text-gray-100">
              Order
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
      <div className="flex flex-row items-center w-full my-8">
        <div className="w-full sm:w-1/2	 h-64  shadow bg-white p-6 mr-2">
          <div>
            <label className="text-gray-800 dark:text-gray-100 text-sm font-bold leading-tight tracking-normal">
              Customer
            </label>
            <div className="w-full flex item-center my-4">
              <div className="w-full w-2/3">
                <Search />
              </div>
              <i className="text-3xl text-white ml-4 h-12 w-12 cursor-pointer focus:outline-none border border-transparent focus:border-gray-800 focus:shadow-outline-gray bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded flex items-center justify-center">
                <AiIcons.AiOutlinePlus />
              </i>
            </div>
          </div>
          <div>
            <label className="text-gray-800 dark:text-gray-100 text-sm font-bold leading-tight tracking-normal">
              Pilih Tanggal
            </label>
            <div className="relative mb-5 mt-2">
              <div className="absolute right-0 text-gray-600 flex items-center pr-3 h-full cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-calendar-event"
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
                  <rect x={4} y={5} width={16} height={16} rx={2} />
                  <line x1={16} y1={3} x2={16} y2={7} />
                  <line x1={8} y1={3} x2={8} y2={7} />
                  <line x1={4} y1={11} x2={20} y2={11} />
                  <rect x={8} y={15} width={2} height={2} />
                </svg>
              </div>
              <input
                onClick={() => setShowDate(!showDate)}
                id="expiry"
                className="text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                placeholder="MM/YY"
                value={date.startDate && `${date.startDate} / ${date.endDate}`}
                autoComplete="off"
              />
            </div>
            {showDate && <DatePicker changeDate={memoizedChangeDate} />}
          </div>
        </div>

        <div className="w-full sm:w-1/2	 h-64  shadow bg-white p-6 ml-2">
          kanan
        </div>
      </div>
      <div className="w-full  my-6 shadow bg-white p-6">
        <div>
          <Search />
        </div>
        <div className="flex flex-row items-center w-full my-8">
          {/* List item yg di pilih */}
          <div className="w-full sm:w-1/2 p-6">
            <div className="bg-white">
              <div className="">
                <table className="w-full whitespace-nowrap">
                  <tbody>
                    <tr className="text-sm leading-none text-gray-600 h-16">
                      <td className="w-1/2">
                        <div className="flex items-center">
                          <div className="w-10 h-10 bg-blue-400 rounded-sm flex items-center justify-center">
                            <p className="text-xs font-bold leading-3 text-white">
                              DOC
                            </p>
                          </div>
                          <div className="pl-2">
                            <p className="text-sm font-medium leading-none text-gray-800">
                              EOS 850D (EF-S18-55mm f/4-5.6 IS STM)
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="pl-16">
                        <p>
                          <QtyBtn />
                        </p>
                      </td>
                    </tr>
                    <tr className="text-sm leading-none text-gray-600 h-16">
                      <td className="w-1/2">
                        <div className="flex items-center">
                          <div className="w-10 h-10 bg-blue-400 rounded-sm flex items-center justify-center">
                            <p className="text-xs font-bold leading-3 text-white">
                              DOC
                            </p>
                          </div>
                          <div className="pl-2">
                            <p className="text-sm font-medium leading-none text-gray-800">
                              EOS 850D (EF-S18-55mm f/4-5.6 IS STM)
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="pl-16">
                        <p>
                          <QtyBtn />
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          {/* Order Summary */}
          <div className="w-full sm:w-1/2 p-6">
            <div>
              <h1 className="text-2xl font-semibold leading-6 text-gray-800">
                Order Summary
              </h1>
            </div>
            <div className="flex mt-7 flex-col items-end w-full space-y-6">
              <div className="flex justify-between w-full items-center">
                <p className="text-lg leading-4 text-gray-600">Total items</p>
                <p className="text-lg font-semibold leading-4 text-gray-600">
                  20
                </p>
              </div>
              <div className="flex justify-between w-full items-center">
                <p className="text-lg leading-4 text-gray-600">Total Charges</p>
                <p className="text-lg font-semibold leading-4 text-gray-600">
                  $2790
                </p>
              </div>
              <div className="flex justify-between w-full items-center">
                <p className="text-lg leading-4 text-gray-600">
                  Shipping charges
                </p>
                <p className="text-lg font-semibold leading-4 text-gray-600">
                  $90
                </p>
              </div>
              <div className="flex justify-between w-full items-center">
                <p className="text-lg leading-4 text-gray-600">Sub total </p>
                <p className="text-lg font-semibold leading-4 text-gray-600">
                  $3520
                </p>
              </div>
            </div>
            <div className="flex justify-between w-full items-center mt-32">
              <p className="text-xl font-semibold leading-4 text-gray-800">
                Estimated Total{" "}
              </p>
              <p className="text-lg font-semibold leading-4 text-gray-800">
                $2900
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Order;
