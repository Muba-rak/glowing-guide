import './App.css';
import Header from './Components/Header';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Homepage from './Pages/Homepage';

function App() {
  return (
    <div className="App">
      <Header />
      <Homepage />
    </div>
  );
}

export default App;
