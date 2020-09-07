import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter as Router, Switch } from 'react-router-dom';
import store from '../store';

const Providers: React.FC = (props: any) => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          {props.children}
        </Switch>
      </Router>
    </Provider>
  );
}

export default Providers;