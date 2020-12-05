import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import {
  Home,
  Daftar,
  Kontak,
} from '../../containers/pages/index'
const Routes = () => {
    return (
        <Router>
        <Switch>
          <Route path="/" component={Home}>
          </Route>
          <Route path="/daftar" component={Daftar}>
          </Route>
          <Route path="/kontak" component={Kontak}>
          </Route>
          <Route path="/" component={Home}>
          </Route>
        </Switch>
      </Router>
    )
}

export default Routes
