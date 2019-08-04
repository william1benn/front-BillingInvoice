import React from 'react';
import logo from './logo.svg';
import axios from 'axios';
import setAuthToken from'./utils/setAuthToken';
import Main from './Components/Main';
import './App.css';

import AuthState from './context/auth/AuthState';
import AlertState from './context/alert/AlertState';

//Setting JWT Token Gloablly
if(localStorage.token){
  setAuthToken(localStorage.token);
}



function App() {
  return (
    <AuthState>
      <AlertState>
     <Main />
    </AlertState>
      </AuthState>
  );
}

export default App;


