import 'bootstrap/dist/css/bootstrap.css';

import Page from '../components/Page';
import Data from '../components/Data';

const Home = () => (
  <Page>
    <h1>DolarUvita</h1>
    <p>
      <a href="https://twitter.com/dolaruvita">Publicamos</a> la cotización del
      dólar en UVAs, Lun-Vie de 10-15. La idea es de{' '}
      <a href="https://twitter.com/ergasto">@ergasto</a>, la programación de{' '}
      <a href="https://twitter.com/arisanguinetti">@arisanguinetti</a> y{' '}
      <a href="https://twitter.com/adrianhmazza">@adrianhmazza</a> fue el
      middleman 😜
    </p>
    <Data />
  </Page>
);

export default Home;
