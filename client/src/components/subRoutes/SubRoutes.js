import React from "react"
import Header from "./Header";
import {BrowserRouter as Router, Route, Link, NavLink, Switch} from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";

const SubRoutes = (props) => {

    return <>
        <Router>
            <Header/>
            <hr/>
            <Switch>
                <Route path="/home" component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/contact" component={Contact}/>
            </Switch>
        </Router>
    </>
}

export default SubRoutes;