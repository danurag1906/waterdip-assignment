import React from 'react';
import Chart from 'react-apexcharts';

function SparklineChart({ data, dateRange }) {
  const filteredData = data.filter((entry) => {
    const entryDate = new Date(entry.date);
    return entryDate >= dateRange[0] && entryDate <= dateRange[1];
  });

  const chartData = {
    options: {
      chart: {
        id: 'sparkline-chart',
        type: 'line',
        height: 100,
      },
      xaxis: {
        type: 'datetime',
        labels: {
          show: false,
        },
      },
      yaxis: {
        labels: {
          show: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
    },
    series: [
      {
        name: 'Total Number of Visitors',
        data: filteredData.map((entry) => [
          new Date(entry.date).getTime(),
          entry.totalVisitors,
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

export default SparklineChart;
