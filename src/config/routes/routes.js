import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import DaftarLanding from '../../containers/pages/psbLanding/daftar/DaftarLanding'
import PsbLanding from '../../containers/pages/psbLanding/homepage/PsbLanding'
import Kontak from '../../containers/pages/psbLanding/kontak/Kontak'


const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={PsbLanding} />
                <Route exact path="/daftar" component={DaftarLanding} />
                <Route exact path="/kontak" component={Kontak} />
            </Switch>
        </Router >
    )
}

export default Routes;
