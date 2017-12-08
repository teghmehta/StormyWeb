import React, {Component} from 'react'
import {connect} from "react-redux";
import Current from "./current";
import Hourly from "./hourly";
import Daily from "./daily";
import Header from "../containers/header";
import {fetchWeather} from "../actions/index";
import {bindActionCreators} from "redux";

class Weather extends Component {
    constructor(props) {
        super(props)

        if ("geolocation" in navigator) {
            let self = this;
            navigator.geolocation.getCurrentPosition(function(position) {
                self.setState({
                    lat: position.coords.latitude,
                    long: position.coords.longitude
                });
                self.props.fetchWeather(position.coords.latitude, position.coords.longitude);
            });
        } else {
            alert("Please allow location!");
        }
    }

    render() {
        return(
            <div>
                <Header weather={this.props.weather}/>
                <Current weather={this.props.weather}/>
                <Hourly weather={this.props.weather}/>
                <Daily weather={this.props.weather}/>
            </div>
        );
    }
}

function mapStateToProps({weather}) {
    if (!weather[0]) {
        return {
            weather: null,
        };
    } else {
        return {
            weather: weather[0],
        };
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({fetchWeather}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Weather);