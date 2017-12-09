import React, {Component} from 'react';

export default class Hourly extends Component {
    render() {
        return (
            <div className="shadow-container">
                <h1 className="title">Hourly</h1>
                {this.props.weather.hourly.data.map(this.renderWeather)}
            </div>
        );
    }

    renderWeather(hourlyData) {
        return (
            <div key={hourlyData.time} className="shadow-container">
                <h2 className="temperature">{Math.round(this.props.weather.currently.temperature) + " °C "} </h2>
                <h2 className="weather-condition">{hourlyData.summary}</h2>
            </div>
        );
    }
}