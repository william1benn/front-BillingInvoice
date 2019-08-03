import React from 'react';
import logo from './logo.svg';
import axios from 'axios';
import Main from './Components/Main';
import './App.css';

import AuthState from './context/auth/AuthState';
import AlertState from './context/alert/AlertState';



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


