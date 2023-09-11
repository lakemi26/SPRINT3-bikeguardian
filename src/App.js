import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './components/pages/Login';
import Solicite from './components/pages/Solicite';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Route>
          <Route path='/' exact component={Home} />
          <Route path='/login' component={Login} />
          <Route path='/solicite' component={Solicite} />
        </Route>
        <Footer/>
      </Router>
    </>
  );
}

export default App;

