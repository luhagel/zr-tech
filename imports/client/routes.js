import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { Meteor } from 'meteor/meteor'
import { render } from 'react-dom'

import Mainlayout from './layouts/MainLayout'

import Home from './components/Home'
import Chat from './components/Chat'
import Forums from './components/Forums'

Meteor.startup(() => {
  render(
    <Router history={browserHistory}>
      <Route path="/" component={Mainlayout}>
        <IndexRoute component={Home} />
        <Route path="/chat" component={Chat} />
        <Route path="/forums" component={Forums} />
      </Route>
    </Router>
    , document.getElementById('render-target'))
})
