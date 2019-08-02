import React, { Component } from 'react';
import axios from 'axios';
import Createcust from "./Createcust";
// import Findcust from './Findcust';

export default class Main extends Component {
   
    render() {
        return (
            <div>

                <Createcust />

                {/* <Findcust />  */}
                
            </div>
        )
    }
}
