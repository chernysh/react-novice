"use strict";

var React = require('react'),
    Router = require('react-router');

var Route = Router.Route,
    DefaultRoute = Router.Route,
    RouteHandler = Router.RouteHandler,
    Link = Router.Link;

var Header = require('./components/header.jsx'),
    Dashboard = require('./components/dashboard.jsx'),
    About = require('./components/about.jsx');


var App = React.createClass({
    render: function() {
        return (
            <div>
                <Header/>
                <div className="main-content">
                    <RouteHandler/>
                </div>
            </div>
        );
    }
});



var routes = (
        <Route handler={App} path="/">
            <DefaultRoute name="dashboard" path="/" handler={Dashboard}/>
            <Route name="about-page" handler={About} />
        </Route>
    )



Router.run(routes, function (Handler) {
    React.render(React.createElement(Handler),
                 document.getElementById("app"));
});

