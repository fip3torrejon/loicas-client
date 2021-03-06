import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.module.css';

import Layout from './components/common/layout/Layout'

import Home from './components/pages/home/Home';
import Historia from './components/pages/historia/Historia';
import Noticias from './components/pages/noticias/Noticias';
import Galeria from './components/pages/galeria/Galeria';
import GaleriaCategoria from './components/pages/galeriaCategoria/GaleriaCategoria';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/historia" component={Historia}/>
          <Route exact path="/noticias" component={Noticias}/>
          <Route exact path="/galeria" component={Galeria}/>
          <Route exact path="/galeria/:categoria" component={GaleriaCategoria} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
