"use strict";

var React = require('react'),
    Router = require('react-router');
var Link = Router.Link;

    
var Header = React.createClass({

    render: function() {
        return  (
            <header>
                <ul>
                    <li><Link to="dashboard">Dashboard</Link></li>
                    <li><Link to="about-page">About</Link></li>
                </ul>
            </header>
        );
    }
});

module.exports = Header;
