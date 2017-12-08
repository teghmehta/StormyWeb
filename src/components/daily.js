import React, {Component} from 'react';

export default class Daily extends Component {
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
                    {this.props.weather.daily.data.map(this.renderWeather)}
                </div>
            );
        }
    }

    renderWeather(dailyData) {
        return (
            <div key={dailyData.time} className="current-container">
                <h2 className="weather-condition">{Math.round((dailyData.temperatureHigh - 32) * 5 / 9) + " °C "} </h2>
                <h2 className="temperature">{dailyData.summary}</h2>
            </div>
        );
    }
}