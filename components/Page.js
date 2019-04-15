import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';
import { ScrapeProvider } from './ScrapeContext';

const useScrapes = () => {
  const [scrapes, setScrapes] = useState({
    uva: [],
    usd: [],
    usdUva: [],
  });

  useEffect(function() {
    (async () => {
      const appPath = 'https://arielsanguinetti.com.ar/dolar-uvita';
      const res = await fetch(`${appPath}/data`);
      const data = await res.json();
      setScrapes(data);
    })();
  }, []);

  return scrapes;
};

const Page = ({ children }) => {
  const scrapes = useScrapes();
  return (
    <ScrapeProvider
      value={{
        scrapes,
      }}
    >
      <Container fluid>{children}</Container>
    </ScrapeProvider>
  );
};

Page.propTypes = {
  children: PropTypes.array.isRequired,
};

export default Page;
