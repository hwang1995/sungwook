import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import {Home, About, Posts, ErrorPage} from 'pages'
import Menu from '../components/Menu';


class App extends Component {
    render() {
        return (
            <div>
                <Menu />
                    <Route exact path="/" component={Home}/>
                <Switch>
                    <Route path="/about/:name" component={About}/>
                    <Route path="/about" component={About}/>
                </Switch>
                <Switch>
                    <Route path="/posts/:category/:postID" component={Posts} />
                    <Route path="/posts" component={Posts} />

                </Switch>
                <Route path="/404" component={ErrorPage}/>
            </div>
        )
    }
}

export default App;