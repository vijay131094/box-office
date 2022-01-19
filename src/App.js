import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navs from './components/Navs.js';
import Home from './pages/Home.js';
import Starred from './pages/Starred.js';

function App() {
  return (
    <div>
      <Navs />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/starred">
          <Starred />
        </Route>

        <Route>
          <div>page not found</div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
