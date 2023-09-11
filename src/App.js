import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Switch>
        <Link to="/" className='navbar_logo'>
        Porto
        </Link>
      </Switch>
    </Router>
    </>
  );
}

export default App;
