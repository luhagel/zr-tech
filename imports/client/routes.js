import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { Meteor } from 'meteor/meteor'
import { render } from 'react-dom'

import Mainlayout from './layouts/MainLayout'

import App from './components/App'

Meteor.startup(() => {
  render(
    <Router history={browserHistory}>
      <Route path="/" component={Mainlayout}>
        <IndexRoute component={App} />
      </Route>
    </Router>
    , document.getElementById('render-target'))
})
