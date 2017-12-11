import React, {Component} from 'react';

export default class Daily extends Component {
    constructor(props) {
        super(props);
        this.renderWeather= this.renderWeather.bind(this);
    }

    render() {
        console.log(this.props)
        return (
            <div className="shadow-container">
                <h1 className="title">Daily</h1>
                {this.props.weather.daily.data.map(this.renderWeather)}
            </div>
        );
    }

    renderWeather(dailyData) {
        let unit = this.props.weather.flags.units;
        let unitText = " °C "
        if (unit === "si") unitText = " °F ";
        else unitText =  " °C ";

        return (
            <div key={dailyData.time} className="shadow-container">
                <h2 className="temperature">{Math.round(dailyData.temperatureHigh) + unitText} </h2>
                {/*<h2 className="weather-condition">{dailyData.summary}</h2>*/}
            </div>
        );
    }
}