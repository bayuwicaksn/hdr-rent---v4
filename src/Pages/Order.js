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
      {/* header */}
      <div className="p-8 flex items-center justify-between bg-white rounded shadow">
        {/* page title */}
        <div>
          <h4 className="text-2xl font-bold">Order</h4>
        </div>
        {/* right menu */}
        <div className="flex gap-x-3">
          <button className="px-5 py-2 bg-gray-200 text-indigo-700 rounded hover:bg-gray-300 transition duration-150 ease-in-out">
            Reserved
          </button>
          <button className="px-5 py-2 bg-indigo-700 text-white rounded hover:bg-indigo-600 transition-duration-150 ease-in-out">
            Pick up
          </button>
        </div>
      </div>
      {/* first section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 my-8 gap-3">
        {/* customer & date section */}
        <div className="p-8 bg-white shadow rounded">
          <div>
            <label>Search Customer</label>
            <div className="w-full flex item-center my-3 gap-x-3">
              <div className="w-full">
                <Search />
              </div>
              <button className="px-5 py-2 bg-indigo-700 text-white rounded hover:bg-indigo-600 transition-duration-150 ease-in-out">
                <AiIcons.AiOutlineUserAdd className="text-2xl" />
              </button>
            </div>
          </div>

          <div>
            <label>Pick Date</label>
            <div className="relative">
              <div
                className="absolute right-0 top-1 flex items-center pr-3 h-full text-xl cursor-pointer"
                onClick={() => setShowDate(!showDate)}
              >
                <AiIcons.AiOutlineCalendar />
              </div>
              <input
                onClick={() => setShowDate(!showDate)}
                type="text"
                id="expiry"
                className="_input"
                placeholder="MM/YY"
                value={date.startDate && `${date.startDate} / ${date.endDate}`}
                autoComplete="off"
              />
              {showDate && <DatePicker changeDate={memoizedChangeDate} />}
            </div>
          </div>
        </div>
        {/* detail customer */}
        <div className="p-8 flex items-center justify-center text-base bg-white text-indigo-300 shadow rounded">
          Please choose customer
        </div>
      </div>

      {/* second section */}
      <div className="my-6 p-8 pb-20 shadow rounded bg-white">
        <div>
          <Search />
        </div>
        <div className="mt-5 grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-10">
          <div>
            <table className="w-full">
              <tbody>
                <tr className="h-16">
                  <td className="pr-5">
                    <div className="h-8 w-8">
                      <img
                        src="https://id.canon/media/image/2020/02/11/fff676b601864fd5bdfff7d8ff8fb658_EOS+850D+w+Kit+Lens+Front+Slant.png"
                        alt="camera"
                        className="h-full w-full rounded-full overflow-hidden shadow"
                      />
                    </div>
                  </td>
                  <td className="pr-5">
                    <div className="lg:text-base">
                      EOS 850D (EF-S18-55mm f/4-5.6 IS STM)
                    </div>
                    <div className="font-semibold italic">#MC10023</div>
                  </td>
                  <td>
                    <div className="flex justify-end">
                      <QtyBtn />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* total */}
          <div className="w-full pt-2">
            <div>
              <h1 className="text-lg lg:text-xl font-semibold leading-6 text-gray-800">
                Order Summary
              </h1>
            </div>
            <div className="flex mt-7 flex-col gap-y-3 text-base lg:text-lg">
              <div className="flex justify-between items-center">
                <p>Total items</p>
                <p className="font-semibold ">20</p>
              </div>
              <div className="flex justify-between items-center">
                <p>Total Charges</p>
                <p className="font-semibold ">$2790</p>
              </div>
              <div className="flex justify-between items-center">
                <p>Shipping charges</p>
                <p className="font-semibold ">$90</p>
              </div>
              <div className="flex justify-between items-center">
                <p>Sub total </p>
                <p className="font-semibold ">$3520</p>
              </div>
            </div>
            <div className="flex justify-between w-full items-center mt-20">
              <p className="text-lg lg:text-xl font-semibold leading-4 text-gray-800">
                Estimated Total
              </p>
              <p className="text-lg font-semibold leading-4 text-gray-800">
                $2900
              </p>
            </div>
          </div>
        </div>
        {/* <div className="flex flex-row items-center w-full my-8">
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
        </div> */}
      </div>
    </div>
  );
}

export default Order;
