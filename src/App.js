import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Vistoria from './components/pages/Vistoria';
import Entrar from './components/pages/Entrar';
import CriarConta from './components/pages/CriarConta';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Route>
          <Route path='/' exact component={Home} />
          <Route path='/vistoria' component={Vistoria} />
          <Route path='/entrar' component={Entrar} />
          <Route path='/criar-conta' component={CriarConta} />
        </Route>
      </Router>
    </>
  );
}

export default App;

