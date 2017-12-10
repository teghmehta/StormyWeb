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
        let unit = this.props.weather.flags.units;
        let unitText = " °C "
        if (unit === "si") unitText = " °F ";
        else unitText =  " °C ";

        return (
            <div key={hourlyData.time} className="shadow-container">
                <h2 className="temperature">{Math.round(this.props.weather.currently.temperature) + unitText} </h2>
                <h2 className="weather-condition">{hourlyData.summary}</h2>
            </div>
        );
    }
}