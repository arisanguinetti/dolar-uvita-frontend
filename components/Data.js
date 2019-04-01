import { useContext } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ScrapeContext } from './ScrapeContext';
import Table from './Table';
import TableObjects from './TableObject';
import Chart from './Chart';

const Data = () => {
  const { scrapes } = useContext(ScrapeContext);
  return (
    <div>
      <Row>
        <Col>
          <h2>Últimos valores de USD en UVA</h2>
          <Chart scrapes={scrapes.uvaUsd} />
        </Col>
      </Row>
      <Row>
        <Col>
          <h2>Últimos valores UVA</h2>
          <Table scrapes={scrapes.uva} />
        </Col>
        <Col>
          <h2>Últimos valores USD</h2>
          <TableObjects scrapes={scrapes.usd} />
        </Col>
        <Col>
          <h2>Últimos valores USD en UVA</h2>
          <TableObjects scrapes={scrapes.uvaUsd} />
        </Col>
      </Row>
    </div>
  );
};

export default Data;
