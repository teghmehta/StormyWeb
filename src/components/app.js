import React, {Component} from 'react'
import Current from "../containers/current";
import Hourly from "../containers/hourly";
import Daily from "../containers/daily";
import Header from "../containers/header";

export default class App extends Component {
    render() {
        return(
           <div>
               <Header/>
               <Current/>
               <Hourly/>
               <Daily/>
           </div>
        )
    }
}