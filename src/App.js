import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home.js';
import Show from './pages/Show.js';
import Starred from './pages/Starred.js';

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route exact path="/starred">
        <Starred />
      </Route>

      <Route exact path="/show/:id">
        <Show/>
      </Route>

      <Route>
        <div>page not found</div>
      </Route>
    </Switch>
  );
}

export default App;
