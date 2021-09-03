import React from 'react';
import { Dashboard, Error, Login } from './pages';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Dashboard} />
        <Route path='/login' component={Login} />
        <Route path='*' component={Error} />
      </Switch>
    </Router>
  );
}

export default App;
