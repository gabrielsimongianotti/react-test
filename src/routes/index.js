import React from 'react';
import { BrowserRouter, Route, Switch, } from 'react-router-dom';

import Home from "../pages/home/Home.js"
import Details from "../pages/details/Details.js"

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/details" component={Details} />
      </Switch>
    </BrowserRouter>
  );
};

