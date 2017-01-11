import {Router, Route} from 'react-router'
import App from 'App'
import React from 'react'
import CodeTyping from 'code-typing'

export default (props) => (
  <Router {...props}>
    <Route path='/' component={App}>
      <Route path='code-typing' component={CodeTyping} />
    </Route>
  </Router>
)
