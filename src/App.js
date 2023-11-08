import "./App.css";

import React, { useState } from "react";
import ExcelUploader from "./components/ExcelUploader";
import DateSelector from "./components/DateSelector";
import TimeSeriesChart from "./components/TimeSeriesChart";
import ColumnChart from "./components/ColumnChart";
import SparklineChart from "./components/SparklineChart";

function App() {
  const [excelData, setExcelData] = useState([]);
  const [selectedDateRange, setSelectedDateRange] = useState([]);

  // Define a function to handle date range changes
  const handleDateRangeChange = (dateRange) => {
    setSelectedDateRange(dateRange);
  };

  console.log("inside app");
  console.log(excelData);

  console.log("date selected");
  console.log(selectedDateRange);

  return (
    <div>
      <ExcelUploader onUpload={setExcelData} />
      <DateSelector
        selectedDateRange={selectedDateRange}
        onDateRangeChange={handleDateRangeChange}
      />
      <TimeSeriesChart data={excelData} dateRange={selectedDateRange} />
      <ColumnChart data={excelData} dateRange={selectedDateRange} />
      <SparklineChart
        data={excelData}
        dateRange={selectedDateRange}
        type="adult"
      />
      <SparklineChart
        data={excelData}
        dateRange={selectedDateRange}
        type="children"
      />
    </div>
  );
}

export default App;
