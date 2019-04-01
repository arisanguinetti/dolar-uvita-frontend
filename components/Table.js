import { Table as TableBootstrap } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { formatDate } from '../utils/dates';

const Table = ({ scrapes }) => (
  <TableBootstrap>
    <thead>
      <tr>
        <th>Fecha</th>
        <th>Valor</th>
      </tr>
    </thead>
    <tbody>
      {scrapes.slice(0, 10).map(scrape => (
        <tr key={scrape.date}>
          <td>{formatDate(scrape.date)}</td>
          <td>{scrape.value.toFixed(2)}</td>
        </tr>
      ))}
    </tbody>
  </TableBootstrap>
);

Table.propTypes = {
  scrapes: PropTypes.array.isRequired,
};

export default Table;
