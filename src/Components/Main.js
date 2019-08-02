import React, { Component } from 'react';
import axios from 'axios';
import Createcust from "./Createcust";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Findcust from './Findcust';
import FoundCust from './FoundCust';
import Nav from './Nav';
import CustomerInfo from './CustomerInfo';
import DelUser from './DelUser';

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
{/* <Switch> */}

              <Route exact path='/create' component={Createcust}/>

              <Route exact path='/find' render={(props) => <Findcust theCust = {this.state.allUsers} searchRes = {this.searchRes} />}/>
              <Route exact path='/find' render={(props) => <FoundCust theCustomers = {this.state.searched} loading={this.state.loading} />}/>
              <Route exact path='/customerInfo/:custid' component={CustomerInfo} />
              <Route exact path='/DelUser/:custid' component={DelUser} />


{/* </Switch> */}
            </div>
        )
    }
}
