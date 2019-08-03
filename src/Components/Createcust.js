import React, { Component } from 'react'
import axios from 'axios';


export default class Createcust extends Component {
     state ={ 
    Name:'',
    Email:'',
    Phone:'',
    Street:'',
    City:'',
    State:'',
    Zip:'',
    Country:'',
    Desc:'',
    Balance:'',
    }

   handleChange = (e) =>{
console.log(e.target.name)
       this.setState({
       [e.target.name]: e.target.value
    })
   }

newCustomer=(e)=>{
    e.preventDefault();

    axios.post("http://localhost:5000/addCustomer",{
        name:this.state.Name,
        email:this.state.Email,
        phone:this.state.Phone,
        line1:this.state.Street,
        city:this.state.City,
        state:this.state.State,
        country:this.state.Country,
        postal_code:this.state.Zip,
        description:this.state.Desc,
        balance:this.state.Balance,

    }).then((theRes)=>{
        console.log(theRes)
      
    }).catch((err)=>{
      console.log(err)

    })
    
    this.setState({
        Name:'',
        Email:'',
        Phone:'',
        Street:'',
        City:'',
        State:'',
        Zip:'',
        Country:'',
        Desc:'',
        Balance:'',
    })
}


    render() {
        return (
            <div className ="forms" >
                <form onSubmit={this.newCustomer} className="Create-Customer">
        <label className="inputs">
        Name:
          <input name='Name' type="text" value={this.state.Name} onChange={this.handleChange} />
        </label>
        <label className="inputs">
        Email:
          <input name="Email" type="text" value={this.state.Email} onChange={this.handleChange} />
        </label>
        <label className="inputs">
        Phone Number:
          <input name="Phone" type="text" value={this.state.Phone} onChange={this.handleChange} />
        </label>
        <label className="inputs">
        Street Address:
          <input name="Street" type="text" value={this.state.Street} onChange={this.handleChange} />
        </label>
        <label className="inputs">
        City:
          <input name="City" type="text" value={this.state.City} onChange={this.handleChange} />
        </label>
        <label className="inputs">
        State:
          <input name="State" type="text" value={this.state.State} onChange={this.handleChange} />
        </label>
        <label className="inputs">
        Zip Code:
          <input name="Zip" type="text" value={this.state.Zip} onChange={this.handleChange} />
        </label>
        <label className="inputs">
        Country:
          <input name="Country" type="text" value={this.state.Country} onChange={this.handleChange} />
        </label>
        <label>
        Description Of Charge:
          <input name="Desc" type="text" value={this.state.Desc} onChange={this.handleChange} />
        </label>
        <label className="inputs">
        Balance:
          <input name="Balance" type="text" value={this.state.Balance} onChange={this.handleChange} />
        </label>

        <button>Submit</button>
            </form>
            </div>
        )
    }
}
