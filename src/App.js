import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Hero />
      </div>
    </Router>
  );
}

export default App;
