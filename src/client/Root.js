import React from 'react'
import {Router} from 'react-router'
import {createHashHistory} from 'history'
import App from 'shared/App'

const hashHistory = createHashHistory({basename : process.env.PUBLIC_URL})

const Root = () => (
    <Router history={hashHistory}>
        <App/>
    </Router>
    // <HashRouter basename={process.env.PUBLIC_URL}>
    //     <App/>
    // </HashRouter>
)

export default Root