import React, {Component} from 'react';
import SearchBar from './searchbar';
import {connect } from 'react-redux'
import {fetchWeather} from "../actions/index";
import {bindActionCreators} from "redux";

class Header extends Component {

    constructor(props) {
        super(props);

        //term is the input
        this.state = {unit: "ca"};
        this.onCel = this.onCel.bind(this);
        this.onFah = this.onFah.bind(this);

    }

    onCel() {
        this.props.fetchWeather(this.props.lat, this.props.long, "ca");
    }

    onFah() {
        this.props.fetchWeather(this.props.lat, this.props.long, "us");
    }

    render() {
        var location = !this.props.weather ? 'Select a City' : "Using GPS";
        return(
            <header className="header">
                <div className='content'>
                    <img className="stormy-logo" src="../../res/stormy_icon.png "/>
                    <h1 className="stormy-title">Stormy Web</h1>
                    <SearchBar class="search-container"/>
                    <div className="location-div">
                        <h2 className="city">{location}</h2>
                        <img className="place-icon" src="../../res/ic_place_white_48dp.png"/>
                    </div>

                    <form className="form">
                        <div className="switch-field">
                            <input type="radio" id="switch_left" name="switch_2" value="ca" defaultChecked
                                   onChange={this.onCel}/>
                            <label htmlFor="switch_left">°C</label>
                            <input type="radio" id="switch_right" name="switch_2" value="us"
                                   onChange={this.onFah}/>
                            <label htmlFor="switch_right">°F</label>
                        </div>
                    </form>
                </div>
            </header>
        );
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({fetchWeather}, dispatch);
}

export default connect(null, matchDispatchToProps)(Header)