import React, {Component} from 'react'
import {connect} from "react-redux";
import Current from "../components/current";
import Hourly from "../components/hourly";
import Daily from "../components/daily";
import Header from "./header";
import {fetchWeather} from "../actions/index"
import {getCity} from "../actions/city_name";
import {bindActionCreators} from "redux";

class Weather extends Component {
    constructor(props) {
        super(props)
        this.findLocation();
    }

    findLocation() {
        if ("geolocation" in navigator) {
            let self = this;
            navigator.geolocation.getCurrentPosition(function(position) {
                self.setState({
                    lat: position.coords.latitude,
                    long: position.coords.longitude
                });
                self.props.getCity(position.coords.latitude, position.coords.longitude, null);
                self.props.fetchWeather(position.coords.latitude, position.coords.longitude, "auto");
            });
        } else {
            alert("Please allow location!");
        }
    }

    render() {
        //Don't load until weather is fetched
        if (!this.props.weather) {
            return null;
        } else {
            return(
                <div>
                    <Header
                            lat={this.state.lat} long={this.state.long}
                            city={this.props.city} weather={this.props.weather}
                            onLocationClick={this.findLocation}/>
                    <Current city={this.props.city} weather={this.props.weather}/>
                    <Daily weather={this.props.weather}/>
                    <Hourly weather={this.props.weather}/>
                </div>
            );
        }
    }
}

function mapStateToProps(state) {
    let weather = state.weather;
    if (!weather[0]) {
        return {
            weather: null,
            city: null
        };
    } else {
        if (!state.city[0] || state.city[0] === undefined) {
            return {
                weather: weather[0],
                city: state.city

            };
        }

        return {
            weather: weather[0],
            city: state.city[0]

        };
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({fetchWeather, getCity}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Weather);