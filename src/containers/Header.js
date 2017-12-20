import React, {Component} from 'react';
import SearchBar from './searchbar';
import {connect } from 'react-redux'
import {fetchWeather} from "../actions/index";
import {bindActionCreators} from "redux";
import {getCity} from "../actions/city_name";
import LocationDropDown from "../components/locationdropdown";
var store = require('store');
export const SELECTED = "SELECTED";
const FOLLOW_ME = "FOLLOW_ME";
class Header extends Component {

    constructor(props) {
        super(props);

        this.state = {
            showDropDown: false,
            unit: "ca",
            shouldCallSelectLocation: true,
        }
        this.onCel = this.onCel.bind(this);
        this.onFah = this.onFah.bind(this);
        this.onLocationClick = this.onLocationClick.bind(this);
        this.showLocations = this.showLocations.bind(this);
        this.createStore = this.createStore.bind(this);
        this.removeStore = this.removeStore.bind(this);
        this.onLocationClick = this.onLocationClick.bind(this);
        this.onSelectLocation = this.onSelectLocation.bind(this);

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
        this.refs.child.changeIndex(null);
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
        this.setState({shouldCallSelectLocation: true});
        store.set(cityStoreProps.key, {lat: cityStoreProps.value.lat, long: cityStoreProps.value.long});
        this.onSelectLocation(cityStoreProps);
    }

    getStore() {
        const locations = [];

        store.each(function(value, key) {
            locations.push({key, value})
        });
        return locations;
    }

    removeStore(key) {
        store.remove(key);// can remove this after location set");
        this.setState({shouldCallSelectLocation: false},() => {
            this.refs.child.followMe();
            this.onLocationClick();
        });
    }

    onSelectLocation(value) {
        console.log(this.state.shouldCallSelectLocation, "oSL");
        if (this.state.shouldCallSelectLocation) {
            console.log(value, "oSL");
            if (!value) {
                // store.set(SELECTED, FOLLOW_ME);
                this.onLocationClick();
                this.refs.child.changeIndex(null);
            } else {
                // // store.set(SELECTED, location);
                this.props.fetchWeather(value.value.lat, value.value.long, this.state.unit);
                this.props.getCity(null, null, value.key);
                this.refs.child.changeIndex(value.key);

            }
        }
    }

    render() {
        return(
            <header className="header">
                <div className='content'>

                    <LocationDropDown ref="child" removeStore={this.removeStore} onSelectLocation={this.onSelectLocation} getStore={this.getStore()} locations={this.getStore()} className="location-drop"/>

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