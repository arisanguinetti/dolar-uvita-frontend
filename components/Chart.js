import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';
import { formatDate } from '../utils/dates';

class Chart extends PureComponent {
  render() {
    const { scrapes } = this.props;
    const scrapesWithDates = [...scrapes].reverse().map(scrape => ({
      date: formatDate(scrape.date),
      value: {
        comprador: scrape.value.comprador.toFixed(2),
        vendedor: scrape.value.comprador.toFixed(2),
      },
    }));
    return (
      <ResponsiveContainer height={200}>
        <LineChart
          data={scrapesWithDates}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis domain={['dataMin', 'dataMax']} />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="value.comprador"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          <Line
            type="monotone"
            dataKey="value.vendedor"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}

Chart.propTypes = {
  scrapes: PropTypes.array.isRequired,
};

export default Chart;