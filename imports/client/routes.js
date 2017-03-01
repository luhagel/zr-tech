import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { Accounts, STATES } from 'meteor/std:accounts-ui';

import Mainlayout from './layouts/MainLayout';

import Home from './components/Home';
import Chat from './components/Chat';
import Forums from './components/Forums';

Meteor.startup(() => {
  render(
    <Router history={browserHistory}>
      <Route path="/" component={Mainlayout}>
        <IndexRoute component={Home} />
        <Route path="/signup" component={() => <Accounts.ui.LoginForm formState={STATES.SIGN_UP} />} />
        <Route path="/signin" component={() => <Accounts.ui.LoginForm />} />
        <Route path="/chat" component={Chat} />
        <Route path="/forums" component={Forums} />
        <Route path="*" component={() => <h1>404 - Not Found</h1>} />
      </Route>
    </Router>
    , document.getElementById('render-target'));
});
