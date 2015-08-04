"use strict";

var React = require('react'),
    Router = require('react-router');
var Link = Router.Link;

    
var About = React.createClass({

    render: function() {
        return  (
            <div>
                <div className="wrap">
                    <div className="column">
                        <p>About page</p>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = About;
