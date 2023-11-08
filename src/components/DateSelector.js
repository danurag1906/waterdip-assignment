import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function DateSelector({ selectedDateRange, onDateRangeChange }) {
  const [selectedMonth, setSelectedMonth] = useState(null);
  const [selectedYear, setSelectedYear] = useState(null);

  const handleMonthChange = (date) => {
    setSelectedMonth(date);
    updateDateRange(selectedYear, date);
  };

  const handleYearChange = (date) => {
    setSelectedYear(date);
    updateDateRange(date, selectedMonth);
  };

  // const updateDateRange = (year, month) => {
  //   // Combine the selected year and month to create a new Date
  //   console.log(`year : ${year} ,+,month : ${month}`);
  //   const newDate = new Date(year, month.getMonth());
  //   console.log(`new date ${newDate}`);

  //   // Pass the new date to the parent component
  //   onDateRangeChange(newDate);
  // };

  const updateDateRange = (year, month) => {
    if (year && month !== null) {
      console.log(`year : ${year} + month : ${month}`); // Ensure the month is valid, starting from 0 for January
      const newDate = new Date(year.getFullYear(), month.getMonth(), 1);
      console.log(`new date ${newDate}`);
      // Pass the new date to the parent component
      onDateRangeChange(newDate);
    }
  };

  return (
    <div>
      <div>
        <label>Select Month:</label>
        <DatePicker
          selected={selectedMonth}
          onChange={handleMonthChange}
          showMonthYearPicker
          dateFormat="MMMM yyyy"
        />
      </div>
      <div>
        <label>Select Year:</label>
        <DatePicker
          selected={selectedYear}
          onChange={handleYearChange}
          showYearPicker
          dateFormat="yyyy"
        />
      </div>
    </div>
  );
}

export default DateSelector;
