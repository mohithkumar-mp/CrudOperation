import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import User from './user';

function App() {
  return (
    <div className="App">
      <Button>This is Button</Button>
      <User/>
    </div>
  );
}

export default App;
