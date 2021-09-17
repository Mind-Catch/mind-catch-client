import React from 'react';
import * as Page from './pages';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Switch>
      <Route path="/" component={Page.home} exact />
      <Route path="/roomList" component={Page.gameList} exact />
      <Route path="/room/:roomId" component={Page.gameRoom} exact />
    </Switch>
  );
}

export default App;
