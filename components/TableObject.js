import { Table as TableBootstrap } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { formatDate } from '../utils/dates';

const TableObjects = ({ scrapes }) => (
  <TableBootstrap>
    <thead>
      <tr>
        <th>Fecha</th>
        <th>Comprador</th>
        <th>Vendedor</th>
      </tr>
    </thead>
    <tbody>
      {scrapes.slice(0, 10).map(scrape => (
        <tr key={scrape.date}>
          <td>{formatDate(scrape.date)}</td>
          <td>{scrape.value.comprador.toFixed(2)}</td>
          <td>{scrape.value.vendedor.toFixed(2)}</td>
        </tr>
      ))}
    </tbody>
  </TableBootstrap>
);

TableObjects.propTypes = {
  scrapes: PropTypes.array.isRequired,
};

export default TableObjects;
