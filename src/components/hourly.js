import React, {Component} from 'react';

export default class Hourly extends Component {
    constructor(props) {
        super(props);
        this.renderWeather= this.renderWeather.bind(this);
    }

    render() {
        return (
            <div className="shadow-container hourly-container">
                <h1 className="title">Hourly</h1>
                {this.props.weather.hourly.data.map(this.renderWeather)}
            </div>
        );
    }

    renderWeather(hourlyData, index) {
        let unit = this.props.weather.flags.units;
        let unitText = " °C ";
        if (unit === "us") unitText = " °F ";
        else unitText =  " °C ";

        return (
            <div key={hourlyData.time * (index + 1)} className=" hourly-item">
                <h2 className="temperature">{Math.round(hourlyData.temperature) + unitText} </h2>
                {/*<h2 className="weather-condition">{hourlyData.summary}</h2>*/}
            </div>
        );
    }
}