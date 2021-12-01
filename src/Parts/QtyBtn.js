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
    <div className="flex items-center lg:items-start gap-3 border rounded px-3">
      <span
        onClick={minusCount}
        className="text-2xl select-none cursor-pointer"
      >
        -
      </span>
      <input
        id="counter"
        className="border-none focus:border-transparent focus:ring-0 text-center w-12 select-none"
        type="text"
        value={count}
        onChange={(e) => e.target.value}
      />
      <span
        onClick={addCount}
        className="text-2xl select-none cursor-pointer text-indigo-700"
      >
        +
      </span>
    </div>
  );
};

export default QtyBtn;
