import Mostrador from "./components/Mostrador";
import Header from "./shared/Header";
import { Provider } from 'react-redux'
import Store  from './store/Store'

function App() {
  return (
    <Provider store={Store}>
      <Header />
      <Mostrador />
    </Provider>
  );
}

export default App;
