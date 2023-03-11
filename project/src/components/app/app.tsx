import { Main, MainProps } from '../../pages/main/main';

type AppProps = MainProps;

function App({numberOfPlaces}: AppProps): JSX.Element {
  return <Main numberOfPlaces={numberOfPlaces} />;
}

export default App;
