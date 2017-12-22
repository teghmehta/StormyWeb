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

    renderIcon(icon) {
        switch (icon) {
            case "clear-day":
                return "../../res/ic_clear_day.png";
            case "clear-night":
                return "../../res/ic_clear_night.png";
            case "rain":
                return "../../res/ic_rainy_weather.png";
            case "snow":
                return "../../res/ic_snow_weather.png";
            case "sleet":
                return "../../res/ic_rain_snow.png";
            case "wind":
                return "../../res/ic_windy_weather.png";
            case "fog":
                return "../../res/ic_haze_weather.png";
            case "cloudy":
                return "../../res/ic_cloudy_weather.png";
            case "partly-cloudy-day":
                return "../../res/ic_partly_cloudy.png";
            case "partly-cloudy-night":
                return "../../res/ic_partly_cloudy_night.png";

        }
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
                    <Current city={this.props.city} weather={this.props.weather} renderIcon={this.renderIcon}/>
                    <Daily weather={this.props.weather} renderIcon={this.renderIcon}/>
                    <Hourly weather={this.props.weather} renderIcon={this.renderIcon}/>
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