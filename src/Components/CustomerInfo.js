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

        console.log(this.state.aCustomer)
        return (
            <div>

<h2>{this.state.aCustomer.name}</h2>
<h5>{this.state.aCustomer.email}</h5>
<h5>{this.state.aCustomer.phone}</h5>
<h5>{this.state.aCustomer.line1}</h5>
<h5>{this.state.aCustomer.description}</h5>
<h5>{this.state.aCustomer.balance}</h5>


<Link to ={`/DelUser/${this.state.aCustomer.id}`}>
<button 
class="btn waves-effect waves-light" type="submit" name="action">Delete Customer
  </button>
</Link>

            </div>
        )
    }
}
