import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AllVillagers from '../../containers/AllVillagers';
import VillagerDetail from '../../components/villagers/VillagerDetail';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={AllVillagers} />
        <Route path="/:id" component={VillagerDetail} />
      </Switch>
    </Router>
  );
}
