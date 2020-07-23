import React, { Component } from 'react';

export default class Navbar extends Component {
  render() {
    return (
      <div className="container">
        <nav className="uk-navbar-container uk-navbar-transparent" uk-navbar="mode: click">
          <div className="uk-navbar-left uk-light">
              <ul className="uk-navbar-nav">
                  <li><a href="#">Active</a></li>
                  <li><a href="#">Item</a></li>
              </ul>
          </div>
          <div className="uk-navbar-right uk-light">
              <ul className="uk-navbar-nav">
                  <li><a href="/login">Login</a></li>
                  <li><a href="/register">Register</a></li>
              </ul>
          </div>
        </nav>
      </div>
    );
  }
}