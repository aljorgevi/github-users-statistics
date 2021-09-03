import React from 'react';
import { Dashboard, Error, Account } from './pages';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar } from './components';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Dashboard} />
        <Route path='/login' component={Account} />
        <Route path='*' component={Error} />
      </Switch>
    </Router>
  );
}

export default App;
