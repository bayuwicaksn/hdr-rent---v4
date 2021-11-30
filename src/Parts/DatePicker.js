import { useEffect, useState } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file

function DatePicker({ changeDate }) {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  useEffect(() => {
    changeDate(state);
  }, [state, changeDate]);

  return (
    <div className="absolute shadow-lg z-30">
      <DateRange
        editableDateInputs={true}
        onChange={(item) => {
          setState([item.selection]);
        }}
        moveRangeOnFirstSelection={false}
        ranges={state}
      />
    </div>
  );
}

export default DatePicker;
