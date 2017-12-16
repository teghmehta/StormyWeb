import React, {Component} from 'react';
import SearchBar from './searchbar';
import {connect } from 'react-redux'
import {fetchWeather} from "../actions/index";
import {bindActionCreators} from "redux";
import {getCity} from "../actions/city_name";
import LocationDropDown from "../components/locationdropdown";
var store = require('store');

class Header extends Component {

    constructor(props) {
        super(props);

        this.state = {
            showDropDown: false,
            unit: "ca"

        }
        this.onCel = this.onCel.bind(this);
        this.onFah = this.onFah.bind(this);
        this.onLocationClick = this.onLocationClick.bind(this);
        this.showLocations = this.showLocations.bind(this);
        this.createStore = this.createStore.bind(this);

    }

    onCel() {
        this.state = {unit: "ca"};
        this.props.fetchWeather(this.props.lat, this.props.long, this.state.unit);
    }

    onFah() {
        this.state = {unit: "us"};
        this.props.fetchWeather(this.props.lat, this.props.long, this.state.unit);
    }

    onLocationClick() {
        this.props.fetchWeather(this.props.lat, this.props.long, this.state.unit);
        this.props.getCity(this.props.lat, this.props.long, null);
    }

    showLocations() {
        let locState;
        if (this.state.showDropDown) {
            locState = false
        } else {
            locState = true
        }

        this.setState ({showDropDown: locState})
    }

    createStore(cityStoreProps) {
        store.set(cityStoreProps.cityName, {lat: cityStoreProps.lat, long: cityStoreProps.long});
        console.log(cityStoreProps);
    }

    getStore() {
        const locations = [];

        store.each(function(value, key) {
            locations.push({key, value})
        });
        console.log(locations, "getsotre")
        return locations;
    }

    removeStore(key) {
        store.remove(key)
    }

    render() {
        return(
            <header className="header">
                <div className='content'>

                    <LocationDropDown locations={this.getStore()} className="location-drop"/>

                    <img className="stormy-logo" src="../../res/stormy_icon.png "/>
                    <h1 className="stormy-title">Stormy Web</h1>

                    <SearchBar createStore={this.createStore} city={this.props.city} unit={this.state.unit} class="search-container"/>
                    <button onClick={this.onLocationClick} className="location-div">
                        <img className="place-icon" src="../../res/ic_place_white_48dp.png"/>
                    </button>

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
    return bindActionCreators({fetchWeather, getCity}, dispatch);
}

export default connect(null, matchDispatchToProps)(Header)