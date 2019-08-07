import React, { Component } from 'react'
import Axios from 'axios';
import { BrowserRouter, Link} from "react-router-dom";

export default class customerInfo extends Component {
    constructor(props){
        super(props)
    }

state={
    aCustomer:'',
    ready: false,
    invoice:'',
    
}


    componentDidMount(){
        
        let id = this.props.match.params.custid;

        Axios.get(`http://localhost:5000/invoice/InvID/${id}`)
         .then(res1 => {
            Axios.get(`http://localhost:5000/getCustomer/${id}`)
            .then(res2 => this.setState({
                invoice:res1.data.invID,
                aCustomer:res2.data,
                ready: true,
            }, () => console.log(this.state))
            
            )
        }
        
          )

    } 

    delUser = () => {
        let id = this.props.match.params.custid;
        console.log(id)

        Axios.post(`http://localhost:5000/delCustomer/${id}`)
        .then((theRes)=>{
  
            console.log(theRes)
              
            this.props.history.push('/findCustomer');

        })

    }


    sending = (e) => {
        e.preventDefault();
        let invoiceID = this.state.invoice
        console.log("clicked")
        Axios.post(`http://localhost:5000/invoice/sendInvoice/${invoiceID}`).then((response)=>{
            console.log(response)

            this.props.history.push('/findCustomer')
        })
    }



info(){

    if(this.state.ready===true){
        
return <div>

<h2>{this.state.aCustomer.name}</h2>
<h5>{this.state.aCustomer.email}</h5>
<h5>{this.state.aCustomer.phone}</h5>
<h5>{this.state.aCustomer.address.line1}</h5>
<h5>{this.state.aCustomer.address.city}</h5>
<h5>{this.state.aCustomer.address.state}</h5>
<h5>{this.state.aCustomer.address.country}</h5>
<h5>{this.state.aCustomer.description}</h5>
<h5>{this.state.aCustomer.balance}</h5>

</div>

    }

}

invoicing(){
if(this.state.invoice !== undefined){

 return <div>

<button onClick={this.sending} class="btn waves-effect waves-light" type="submit" name="send"> Send Invoice</button>

</div>

}else {

return <div>
<Link to ={`/InvoiceItems/${this.state.aCustomer.id}`}>
<button class="btn waves-effect waves-light" type="submit" name="action">Invoice Customer</button>
</Link>

    </div>
}
}
    render() {
        return (
<div>
            {this.info()}



<button onClick ={this.delUser}
class="btn waves-effect waves-light" type="submit" name="action">Delete Customer
  </button>



    {this.invoicing()}

<Link to ={`/UpdateCustomer/${this.state.aCustomer.id}`}>
<button 
class="btn waves-effect waves-light" type="submit" name="action">Update Customer</button>
</Link>



            </div>
        )
    }
}

