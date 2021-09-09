import React from 'react';
import * as Page from './pages';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Switch>
      <Route component={Page.home} />
    </Switch>
  );
}

export default App;
