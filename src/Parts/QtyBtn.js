import React, { useState } from "react";

const QtyBtn = () => {
  const [count, setCount] = useState(0);

  const addCount = () => {
    setCount((prev) => prev + 1);
  };

  const minusCount = () => {
    if (count > 0) {
      setCount((prev) => prev - 1);
    }
  };
  return (
    <div className="flex">
      <span
        onClick={minusCount}
        className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer border border-gray-300 border-r-0 w-7 flex items-center justify-center select-none"
      >
        -
      </span>
      <input
        id="counter"
        className="border border-gray-300 text-center w-14 select-none"
        type="text"
        value={count}
        onChange={(e) => e.target.value}
      />
      <span
        onClick={addCount}
        className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer border border-gray-300 border-l-0 w-7 flex items-center justify-center  select-none"
      >
        +
      </span>
    </div>
  );
};

export default QtyBtn;
