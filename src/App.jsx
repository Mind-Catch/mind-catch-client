import React from 'react';
import * as Page from './pages';
import { Switch, Route } from 'react-router-dom';
import OAuth2RedicrectHandler from './components/views/OAuth2RedicrectHandler';
function App() {
  return (
    <Switch>
      <Route exact path="/" component={Page.home} />
      <Route exact path="/kakaologin" component={OAuth2RedicrectHandler} />
    </Switch>
  );
}

export default App;
