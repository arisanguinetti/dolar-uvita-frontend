import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { ScrapeProvider } from './ScrapeContext';

const useScrapes = () => {
  const [scrapes, setScrapes] = useState({
    uva: [],
    usd: [],
    uvaUsd: [],
  });

  useEffect(function() {
    (async () => {
      const res = await fetch(`${process.env.APP_URL}/data`);
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
      <div className="Page">{children}</div>
    </ScrapeProvider>
  );
};

Page.propTypes = {
  children: PropTypes.array.isRequired,
};

export default Page;
