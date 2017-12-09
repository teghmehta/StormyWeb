import React, {Component} from 'react';

export default class Current extends Component {
    renderIcon(icon) {
        switch (icon) {
            case "clear-day":
                return "../../res/ic_clear_day.png";
            case "clear-night":
                return "../../res/ic_clear_night.png";
            case "rain":
                return "../../res/ic_rainy_weather.png";
            case "snow":
                return "../../res/ic_snow_weather.png";
            case "sleet":
                return "../../res/ic_rain_snow.png";
            case "wind":
                return "../../res/ic_windy_weather.png";
            case "fog":
                return "../../res/ic_haze_weather.png";
            case "cloudy":
                return "../../res/ic_cloudy_weather.png";
            case "partly-cloudy-day":
                return "../../res/ic_partly_cloudy.png";
            case "partly-cloudy-night":
                return "../../res/ic_partly_night.png";

        }
    }

    render() {
        return(
            <div className="shadow-container current-container">
                <h2 className="current-city">Toronto, ON</h2>
                <div className="current-temp-icon">
                    <h2 className="weather-condition">{this.props.weather.currently.summary}</h2>
                    <img className="current-weather-icon" src={this.renderIcon(this.props.weather.currently.icon)} />
                    <div className="temp-container">
                        <h2 className="temperature current-temp">
                            {Math.round((this.props.weather.currently.temperature - 32) * 5 / 9)}</h2>
                        <h4 className="temp-unit">°C</h4>
                    </div>
                </div>
                <h2 className="short-term">{this.props.weather.hourly.summary.slice(0, -1) + " in Toronto." +
                " Here you can expect the details of the weather currently."}</h2>
            </div>
        )
    }
}