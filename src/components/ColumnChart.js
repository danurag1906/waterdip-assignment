import React from 'react';
import Chart from 'react-apexcharts';

function ColumnChart({ data, dateRange }) {
  const filteredData = data.filter((entry) => {
    const entryDate = new Date(entry.date);
    return entryDate >= dateRange[0] && entryDate <= dateRange[1];
  });

  const countryData = {};
  filteredData.forEach((entry) => {
    if (countryData[entry.country]) {
      countryData[entry.country] += entry.visitors;
    } else {
      countryData[entry.country] = entry.visitors;
    }
  });

  const chartData = {
    options: {
      chart: {
        id: 'column-chart',
        type: 'bar',
        height: 300,
      },
      xaxis: {
        categories: Object.keys(countryData),
      },
      yaxis: {
        title: {
          text: 'Number of Visitors',
        },
      },
      dataLabels: {
        enabled: false,
      },
    },
    series: [
      {
        name: 'Number of Visitors',
        data: Object.values(countryData),
      },
    ],
  };

  return (
    <div className="chart-container">
      <Chart
        options={chartData.options}
        series={chartData.series}
        type="bar"
        height={chartData.options.chart.height}
      />
    </div>
  );
}

export default ColumnChart;
