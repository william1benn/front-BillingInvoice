import React, { Component } from 'react'
import { NavLink, Link } from 'react-router-dom';

export default class Nav extends Component {
    render() {
        return (
            <div>
     <nav>
    <div className="nav-wrapper">
      <Link to ="/find" className="brand-logo">Logo </Link>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><NavLink exact to="/create">Create A Customer</NavLink></li>
        <li> <NavLink exact to="/find">Find A Customer</NavLink></li>
      </ul>
    </div>
  </nav>
        
            </div>
        )
    }
}
