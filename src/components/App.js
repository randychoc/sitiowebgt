import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import NotFound from "../pages/404";
import Inicio from "../pages/Inicio";
import Servicios from "../pages/Servicios";
import Catalogo from "../pages/Catalogo";
// import Portafolio from '../pages/Portafolio'
import Contactenos from "../pages/Contactenos";

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Inicio} />
      <Route exact path="/servicios" component={Servicios} />
      <Route exact path="/catalogo" component={Catalogo} />
      <Route exact path="/contactenos" component={Contactenos} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);
export default App;
