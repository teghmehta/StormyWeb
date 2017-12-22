import React, {Component} from 'react';

export default class Daily extends Component {
    constructor(props) {
        super(props);
        this.renderWeather= this.renderWeather.bind(this);
    }

    render() {
        return (
            <div className="shadow-container">
                <h1 className="title">Daily</h1>
                {this.props.weather.daily.data.map(this.renderWeather)}
            </div>
        );
    }

    getDate(timestamp) {
        let days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
        let date = new Date(timestamp*1000);
        return days[date.getDay()];
    }

    renderWeather(dailyData, index) {
        let unit = this.props.weather.flags.units;
        let unitText = " °C ";
        let windUnit = " km/h";

        if (unit === "us") {
            windUnit = " mph";
            unitText = " °F ";
        } else {
            windUnit = " km/h";
            unitText =  " °C ";
        }

        return (
            <div key={dailyData.time * (index + 1)} className="daily-item">
                <h2 className="daily-day">{this.getDate(dailyData.time)} TOD</h2>
                <h3 className="daily-condition">{dailyData.summary}</h3>
                <div className="daily-temp-icon">
                    <img className="daily-icon" src={this.props.renderIcon(dailyData.icon)}/>
                    <h2 className="daily-temp">{Math.round(dailyData.temperatureHigh) + unitText} </h2>
                </div>
                <div className="daily-detail-container">
                    <div className="daily-detail-item">
                        <h3 className="daily-detail-label">Wind Speed:</h3>
                        <h3 className="daily-detail-value">{Math.round(dailyData.windSpeed) + windUnit}</h3>
                    </div>
                    <div className="daily-detail-item">
                        <h3 className="daily-detail-label">Wind Gust:</h3>
                        <h3 className="daily-detail-value">{Math.round(dailyData.windGust) + windUnit}</h3>
                    </div>
                    <div className="daily-detail-item">
                        <h3 className="daily-detail-label">Humidity:</h3>
                        <h3 className="daily-detail-value">{Math.round(100 * dailyData.humidity) + "%"}</h3>
                    </div>
                    <div className="daily-detail-item">
                        <h3 className="daily-detail-label">P.O.P: </h3>
                        <h3 className="daily-detail-value">{Math.round(dailyData.precipProbability)+"%"}</h3>
                    </div>
                    <div className="daily-detail-item">
                        <h3 className="daily-detail-label">Pressure: </h3>
                        <h3 className="daily-detail-value">{Math.round(dailyData.pressure)}</h3>
                    </div>
                </div>
            </div>
        );
    }
}