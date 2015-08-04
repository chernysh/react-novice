"use strict";

var React = require('react'),
    Router = require('react-router');
var Link = Router.Link;

    
var About = React.createClass({

    onErrorImgHandler: function(e) {
        var errorTextElement = document.createTextNode("Could not load image file");
        e.target.parentNode.appendChild(errorTextElement);
    },
    render: function() {
        return  (
            <div>
                <div className="wrap">
                    <div className="column">
                        <p><img onError={this.onErrorImgHandler} src="build/images/about.png" /></p>
                        <p>About page</p>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = About;
