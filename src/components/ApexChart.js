import React, { Component, useState } from "react";

import ReactApexChart from "react-apexcharts";
import useWindowDimensions from "../hooks/WindowDimension";

import { seriesObj, optionsObj } from "../utils/chart";

const ApexChart = () => {
  const [series, setSeries] = useState(seriesObj);
  const [options, setOptionsObj] = useState(optionsObj);

  const { width } = useWindowDimensions();

  return (
    <div id="chart">
      <ReactApexChart
        options={options}
        series={series}
        type="line"
        height={130}
        width={"100%"}
      />
    </div>
  );
};

export default ApexChart;
