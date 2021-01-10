import './App.css';
import Main from './Main';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// Dark, lightText
function App() {

  return (
    <Router>
        <Main />
    </Router>
  );
}

export default App;
