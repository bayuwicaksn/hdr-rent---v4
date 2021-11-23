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
        className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer border border-gray-300 border-r-0 w-7 h-7 flex items-center justify-center pb-1"
      >
        -
      </span>
      <input
        id="counter"
        aria-label="input"
        className="border border-gray-300 h-full text-center w-14 pb-1"
        type="text"
        value={count}
        onChange={(e) => e.target.value}
      />
      <span
        onClick={addCount}
        className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer border border-gray-300 border-l-0 w-7 h-7 flex items-center justify-center pb-1 "
      >
        +
      </span>
    </div>
  );
};

export default QtyBtn;
