import { ReactComponent as Logo } from 'assets/favicon.svg';
import { Button } from 'components/Button';
import { Header } from 'components/Header';

function App() {
  return (
    <div className="App">
      <Header title="hola" />
      <Logo height={100} width={100} />
      <Button onClick={() => alert('hola')}>Example page</Button>
    </div>
  );
}

export default App;
