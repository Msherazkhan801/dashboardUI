import * as React from 'react';
import * as ReactDOM from 'react-dom';
import 'hammerjs';
import { Chart, ChartSeries, ChartSeriesItem, ChartValueAxis, ChartValueAxisItem, ChartCategoryAxis, ChartCategoryAxisItem } from '@progress/kendo-react-charts';

const generateSeries = () => {
  const series = [];

  for (let idx = 0; idx < 500; idx++) {
    series.push({
      value: Math.floor(Math.random() * 100) + 1,
      category: new Date(2000, 0, idx)
    });
  }

  return series;
};

const series = generateSeries();
const categoryAxisMax = new Date(2000, 1, 0);
const categoryAxisMaxDivisions = 10;

const ChartContainer = () => {
  return <Chart pannable={{
    lock: 'y'
  }} zoomable={{
    mousewheel: {
      lock: 'y'
    },
    selection: {
      lock: 'y'
    }
  }}>
        <ChartCategoryAxis>
          <ChartCategoryAxisItem max={categoryAxisMax} maxDivisions={categoryAxisMaxDivisions} />
        </ChartCategoryAxis>
        <ChartValueAxis>
          <ChartValueAxisItem labels={{
        visible: true,
        format: '#.00'
      }} />
        </ChartValueAxis>
        <ChartSeries>
          <ChartSeriesItem data={series} field="value" categoryField="category" />
        </ChartSeries>
      </Chart>;
};
export default ChartContainer