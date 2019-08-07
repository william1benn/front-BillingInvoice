import React, { Component } from 'react';
import axios from 'axios';
import Createcust from "./Createcust";
import { BrowserRouter, Route, Link, Switch, withRouter } from "react-router-dom";
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
import Results from './Results';
import CreateInvoiceItem from './CreateInvoiceItem';
import Update from './Update';
import AuthContext from '../context/auth/authContext';
import hookClass from '../hookClass';


//hookClass is imported



 
class Main extends Component {
  


    state={
        allUsers:[],
        searched:[],
        isSearching: false,
        loading:false,
        empty:true
      }

       //static contextType = AuthContext;

      componentWillMount(){

        if(!this.props.thetok) {
          this.props.history.push("/login");
        }
      }
  
    componentDidMount(){
      //Updates customer
      this.allCustomers();

      this.props.theCurrentUser();
      
     
  }


      allCustomers = () => {

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

              <Nav  theToken = {this.props.thetok} theCurrentUser={this.props.theCurrentUser} />

         <Alerts/>


        <Switch> 

        {/* Does not work to pass props */}
        {/* <Route exact path='/Login' render={(props) => <Login theCurrentUser={this.props.theCurrentUser} />}/> */}

              <Route exact path= '/Login' component={Login} />
              <Route exact path= '/Register' component={Register} />

              <Route exact path='/findCustomer' render={(props) => <Results theCustomers = {this.state.searched} loading={this.state.loading} theCust = {this.state.allUsers} searchRes = {this.searchRes} getCust ={this.allCustomers}/>}/>

              <Route exact path='/' component ={Home} />
              <Route exact path='/create' component={Createcust}/>
              <Route exact path='/customerInfo/:custid' component={CustomerInfo} />
              <Route exact path = '/InvoiceItems/:custid' component={CreateInvoiceItem} />
              <Route exact path = '/UpdateCustomer/:custid' component={Update} />
            
              <Route component={NotFound} /> 

        </Switch>



            </div>
        )
    }
}

export default withRouter(Main);
