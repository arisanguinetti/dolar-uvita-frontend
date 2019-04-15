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
    if (!scrapes)
      return (
        <div>
          <h2>Error loading data</h2>
        </div>
      );
    const scrapesWithDates = [...scrapes].map(scrape => ({
      date: formatDate(scrape.date),
      comprador: scrape.comprador.toFixed(2),
      vendedor: scrape.vendedor.toFixed(2),
    }));
    return (
      <ResponsiveContainer height={250}>
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
          <YAxis domain={['auto', 'auto']} />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="comprador"
            name="USD en UVA Comprador"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          <Line
            type="monotone"
            dataKey="vendedor"
            name="USD en UVA Vendedor"
            stroke="#82ca9d"
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
