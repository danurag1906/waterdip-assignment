import React from "react";
import Chart from "react-apexcharts";

function TimeSeriesChart({ data, dateRange }) {
  console.log("inside timechart");
  console.log(data);
  console.log(dateRange);

  const filteredData = data.filter((entry) => {
    const year = entry.arrival_date_year;
    const month = entry.arrival_date_month;

    // Create a valid date format like "YYYY-MM"
    const entryDate = new Date(`${year}-${month}`);

    const startDate = new Date(dateRange[0]);
    const endDate = new Date(dateRange[1]);

    console.log("entryDate: " + entryDate);
    console.log("startDate: " + startDate);
    console.log("endDate: " + endDate);

    return entryDate >= startDate && entryDate <= endDate;
  });

  console.log("Filtered Data:");
  console.log(filteredData);

  const chartData = {
    options: {
      chart: {
        id: "time-series-chart",
        type: "line",
        height: 300,
      },
      xaxis: {
        type: "datetime",
      },
      yaxis: {
        title: {
          text: "Number of Visitors",
        },
      },
      dataLabels: {
        enabled: false,
      },
    },
    series: [
      {
        name: "Number of Visitors",
        data: filteredData.map((entry) => [
          new Date(
            entry.arrival_date_year,
            entry.arrival_date_month - 1
          ).getTime(),
          entry.visitors,
        ]),
      },
    ],
  };

  return (
    <div className="chart-container">
      <Chart
        options={chartData.options}
        series={chartData.series}
        type="line"
        height={chartData.options.chart.height}
      />
    </div>
  );
}

export default TimeSeriesChart;
