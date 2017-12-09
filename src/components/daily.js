import React, {Component} from 'react';

export default class Daily extends Component {
    render() {
        return (
            <div className="shadow-container">
                <h1 className="title">Daily</h1>
                {this.props.weather.daily.data.map(this.renderWeather)}
            </div>
        );
    }

    renderWeather(dailyData) {
        return (
            <div key={dailyData.time} className="shadow-container">
                <h2 className="temperature">{Math.round(this.props.weather.currently.temperature) + " °C "} </h2>
                <h2 className="weather-condition">{dailyData.summary}</h2>
            </div>
        );
    }
}