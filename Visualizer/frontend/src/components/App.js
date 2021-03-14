import React from 'react'
import { render } from 'react-dom'
// import 'bootstrap/dist/css/bootstrap.min.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom'
import HomePage from './HomePage'
import About from "./About"

export default function App(props) {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/About" component={About} />
            </Switch>
        </Router>
    )
}

const appDiv = document.getElementById('app')
render(<App />, appDiv)
