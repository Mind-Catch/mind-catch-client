import React from 'react';
import * as Page from './pages';
import { Switch, Route } from 'react-router-dom';
import OAuth2RedicrectHandler from './components/views/OAuth2RedicrectHandler';
function App() {
  return (
    <Switch>
      <Route exact path="/kakaologin" component={OAuth2RedicrectHandler} />
      <Route path="/" component={Page.home} exact />
      <Route path="/roomList" component={Page.gameList} exact />
      <Route path="/room/:roomId" component={Page.gameRoom} exact />
    </Switch>
  );
}

export default App;
