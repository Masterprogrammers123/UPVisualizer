import React from 'react'
import { render } from 'react-dom'
// import 'bootstrap/dist/css/bootstrap.min.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom'
import HomePage from './HomePage.jsx'
import About from "./About.jsx"
import Visualizer from "./Visualizer.jsx"

export default function App(props) {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/About" component={About} />
                <Route path="/Visualize" component={Visualizer} />
            </Switch>
        </Router>
    )
}

const appDiv = document.getElementById('app')
render(<App />, appDiv)
