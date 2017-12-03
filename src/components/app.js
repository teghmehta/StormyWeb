import React, {Component} from 'react'
import Current from "../containers/current";
import Header from "./Header";
require('../../style/style.css');
require('../../style/header.css');

export default class App extends Component {
    render() {
        return(
           <div>
               <Header/>
               <Current/>
           </div>
        )
    }
}