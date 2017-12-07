import React, {Component} from 'react'
import Current from "../containers/current";
import Header from "../containers/header";

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