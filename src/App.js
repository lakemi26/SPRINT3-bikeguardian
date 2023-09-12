import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './components/pages/Login';
import Solicite from './components/pages/Solicite';
import Footer from './components/Footer';
import CriarConta from './components/pages/CriarConta';
import AncientCode from './components/pages/AncientCode';
import PagClie from './components/pages/PagClie';
import CadastroBike from './components/pages/CadastroBike';
import EnvioFotos from './components/pages/EnvioFotos';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Route>
          <Route path='/' exact component={Home} />
          <Route path='/login' component={Login} />
          <Route path='/CriarConta' component={CriarConta} />
          <Route path='/solicite' component={Solicite} />
          <Route path='/AncientCode' component={AncientCode} />
          <Route path='/PagClie' component={PagClie} />
          <Route path='/CadastroBike' component={CadastroBike}/>
          <Route path='/EnvioFotos' component={EnvioFotos}/>
          
        </Route>
        <Footer/>
      </Router>
    </>
  );
}

export default App;

