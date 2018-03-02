import React, {Component} from 'react';

export default class Hourly extends Component {
    constructor(props) {
        super(props);
        this.renderWeather= this.renderWeather.bind(this);
    }


    getDate(timestamp) {
        let time = new Date(timestamp*1000).getHours();
        let hour = ""
        if (time > 12) {
            hour = time - 12 + " pm"
        } else if (time === 12 || time === 0) {
            if (time == 0) {
                hour = 12 + " am"
            } else {
                hour = 12 + " pm"
            }
        } else {
            hour = time + " am";
        }
        return hour;
    }

    render() {
        return (
            <div className="shadow-container">
                <h1 className="title">Hourly</h1>
                <div className="hourly-container">
                    {this.props.weather.hourly.data.map(this.renderWeather)}
                </div>
            </div>
        );
    }

    renderWeather(hourlyData, index) {
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
            <div key={hourlyData.time * (index + 1)} className=" hourly-item">
                <h2 className="hourly-temperature">{Math.round(hourlyData.temperature) + unitText} </h2>
                <h3 className="hourly-condition">{hourlyData.summary}</h3>
                <img className="hourly-icon" src={this.props.renderIcon(hourlyData.icon)}/>
                <h2 className="hourly-hour">{this.getDate(hourlyData.time)}</h2>
            </div>
        );
    }
}