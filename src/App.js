import React from 'react';
import { Dashboard, Error } from './pages';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Dashboard} />
        <Route path='*' component={Error} />
      </Switch>
    </Router>
  );
}

export default App;
