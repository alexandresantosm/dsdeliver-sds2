import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Orders from './components/Orders';

function Routes() {
  return (
    <BrowserRouter>
      <Navbar />
      
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/orders">
          <Orders />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;