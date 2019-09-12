import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from './components/pages/home/Home';
import Historia from './components/pages/historia/Historia';
import Noticias from './components/pages/noticias/Noticias';
import Galeria from './components/pages/galeria/Galeria';
import GaleriaCategoria from './components/pages/galeriaCategoria/GaleriaCategoria';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/historia" component={Historia}/>
        <Route exact path="/noticias" component={Noticias}/>
        <Route exact path="/galeria" component={Galeria}/>
        <Route exact path="/galeria/:categoria" component={GaleriaCategoria} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
