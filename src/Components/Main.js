import React, { Component } from 'react';
import axios from 'axios';
import Createcust from "./Createcust";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Findcust from './Findcust';
import FoundCust from './FoundCust';
import Nav from './Nav';
import NotFound from './NotFound';
import CustomerInfo from './CustomerInfo';
import DelUser from './DelUser';
import Register from './Register';
import Login from './Login';
import Home from './Home';
import Alerts from '../Components/Alerts';


export default class Main extends Component {

    state={
        allUsers:[],
        searched:[],
        isSearching: false,
        loading:false,
        empty:true
      }
    
  
    componentDidMount(){
      
    this.setState({loading:true});
  
    setTimeout(() => {
      axios.get('http://localhost:5000/allCustomers')
      .then(res=> this.setState({allUsers:res.data , loading:false, searched:res.data}))
    }, 1000);
  }


  searchRes=(visable)=>{
    this.setState({loading:true})
    setTimeout(()=>{
      this.setState({
        searched:visable,loading:false,
      }) 
    },500)
  
  }
    render() {

        return (
            <div>

              <Nav />

            <Alerts/>
              
              <Route exact path='/create' component={Createcust}/>
              <Route exact path='/findCustomer' render={(props) => <Findcust theCust = {this.state.allUsers} searchRes = {this.searchRes} />}/>
              <Route exact path='/findCustomer' render={(props) => <FoundCust theCustomers = {this.state.searched} loading={this.state.loading} />}/>
              <Route exact path='/customerInfo/:custid' component={CustomerInfo} />
              <Route exact path='/DelUser/:custid' component={DelUser} />
              <Route exact path= '/Register' component={Register} />
              <Route exact path= '/Login' component={Login} />
              <Route exact path='/' component ={Home} />
            
              {/* <Route component={NotFound} /> */}



            </div>
        )
    }
}
