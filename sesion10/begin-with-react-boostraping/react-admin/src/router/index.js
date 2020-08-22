import React from 'react'
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'
import Nav from '../components/Nav'
import Home from '../view/Home'
import Login from '../view/Login'
import Dashboard from '../view/Dashboard'


const MainRouter = () => {
    return (
        <Router>
            <Nav />
            <section className="container">
            <Route exact path="/" component={Home} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/login" component={Login} />
            </section>
        </Router>
    )
}

export default MainRouter