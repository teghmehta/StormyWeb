import React, {Component} from 'react';

export default class Hourly extends Component {
    render() {
        if (!this.props.weather) {
            return (
                <div className="current-container">
                    <h2 className="weather-condition">{"No Data"} </h2>
                </div>
            );
        } else {
            return (
                <div className="current-container">
                    {this.props.weather.hourly.data.map(this.renderWeather)}
                </div>
            );
        }
    }

    renderWeather(hourlyData) {
        return (
            <div key={hourlyData.time} className="current-container">
                <h2 className="weather-condition">{Math.round((hourlyData.temperature - 32) * 5 / 9) + " °C "} </h2>
                <h2 className="temperature">{hourlyData.summary}</h2>
            </div>
        );
    }
}