import React, { Component } from 'react';
import CustCard from './CustCard';
import Spinner from './Spinner';

 

export default class Users extends Component {
    constructor(props){
      super(props);
      this.state={}
    }
      render() {
    if(this.props.loading){
    
      return <Spinner />
    
    }else{
    
      return (
        <div>
    
         {this.props.theCustomers.map(user=>(
    
           <CustCard  key={user._id} customer={user} />
    
        ))}
    
        </div>
      
      );
    
         }
    }
    
    }