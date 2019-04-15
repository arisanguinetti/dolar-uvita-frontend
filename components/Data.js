import { useContext } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ScrapeContext } from './ScrapeContext';
import Table from './Table';
import TableObjects from './TableObject';
import Chart from './Chart';

const Data = () => {
  const { scrapes } = useContext(ScrapeContext);
  if (!scrapes)
    return (
      <div>
        <h2>Error loading data</h2>
      </div>
    );
  return (
    <Row>
      <Col lg={12}>
        <h2>Últimos valores de USD en UVA</h2>
        <Chart scrapes={scrapes.usdUva} />
      </Col>
      <Col sm={12} md={4}>
        <h2>USD en UVA</h2>
        <TableObjects scrapes={scrapes.usdUva} />
      </Col>
      <Col sm={12} md={4}>
        <h2>UVA</h2>
        <Table scrapes={scrapes.uva} />
      </Col>
      <Col sm={12} md={4}>
        <h2>USD</h2>
        <TableObjects scrapes={scrapes.usd} />
      </Col>
    </Row>
  );
};

export default Data;
