import React, { Component } from 'react';
import M from 'materialize-css';
import { NavLink,Link } from 'react-router-dom';


export default class CustCard extends Component {
 
  
  render() {

    return (
<div className="row">
    <div className="col s12 m6">
      <div className="card blue-grey darken-1">
        <div className="card-content white-text">
          <span className="card-title">{this.props.customer.name}</span>
         
          <h5>{this.props.customer.email}</h5>
          <h5>{this.props.customer.phone}</h5>
          <h5>{this.props.customer.city}</h5>
          <h5>{this.props.customer.state}</h5>
          <h5>{this.props.customer.balance}</h5>

        </div>
        <div className="card-action">
          <Link to={`customerInfo/${this.props.customer.custid}`}> Click Here </Link>
]         
        </div>
      </div>
    </div>
  </div>

       
    )
  }
}