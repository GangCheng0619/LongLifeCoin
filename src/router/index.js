import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Main from "../pages/main";
import Presale from "../pages/presale";
import About from "../pages/about";

import "bootstrap/dist/css/bootstrap.min.css";
import "../components/assets/css/custom.css";

function Routes() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Main} />
      <Route exact path="/presale" component={Presale} />
      <Route exact path="/about" component={About} />
    </BrowserRouter>
  );
}

export default Routes;
