import React, { Component } from 'react'
import Axios from 'axios';
import { BrowserRouter, Link} from "react-router-dom";

export default class customerInfo extends Component {

state={
    aCustomer:'',
}


    componentDidMount(){
        let id = this.props.match.params.custid;
    
            Axios.get(`http://localhost:5000/getCustomer/${id}`)
            .then(res=> this.setState({aCustomer:res.data}))

    } 

    
    render() {
        return (
            <div>

<h2>{this.state.aCustomer.name}</h2>

<Link to ={`/DelUser/${this.state.aCustomer.id}`}>
<button 
class="btn waves-effect waves-light" type="submit" name="action">Delete Customer
  </button>
</Link>

            </div>
        )
    }
}
