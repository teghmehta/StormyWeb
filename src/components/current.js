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
                return "../../res/ic_partly_cloudy_night.png";

        }
    }

    renderCity(city) {
        if (typeof city === 'string') {
            return city;
        }

        let locality = city.results[0].address_components[3].short_name;
        let state = city.results[1].address_components[2].short_name;
        let country = city.results[1].address_components[3].short_name;
        let cityToReturn = locality+", " + state;

        if (locality === undefined) {
            locality = city.results[1].address_components[0].long_name;
            if (locality === undefined) {
                cityToReturn = "Somewhere in " + state + ", " + country;
            }
        }
        return cityToReturn;
    }

    render() {
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


        return(
            <div className="shadow-container current-container">
                <h2 className="current-city">{this.renderCity(this.props.city)}</h2>
                <div className="current-temp-icon">
                    <h2 className="weather-condition">{this.props.weather.currently.summary}</h2>
                    <img className="current-weather-icon" src={this.renderIcon(this.props.weather.currently.icon)} />
                    <div className="temp-container">
                        <h2 className="temperature current-temp">
                            {Math.round(this.props.weather.currently.temperature)}</h2>
                        <h4 className="temp-unit">{unitText}</h4>
                    </div>
                </div>
                <table className="current-details">
                    <tbody>
                        <tr className="details">
                            <th>Wind Speed</th>
                            <td>{Math.round(this.props.weather.currently.windSpeed) + windUnit}</td>
                        </tr>
                        <tr className="details">
                            <th>Wind Gust</th>
                            <td>{Math.round(this.props.weather.currently.windGust) + windUnit}</td>
                        </tr>
                        <tr className="details">
                            <th>Humidity</th>
                            <td>{100 * this.props.weather.currently.humidity + "%"}</td>
                        </tr>
                        <tr className="details">
                            <th>P.O.P. </th>
                            <td>{Math.round(this.props.weather.currently.precipProbability)+"%"}</td>
                        </tr>
                        <tr className="details-last">
                            <th>Pressure</th>
                            <td>{Math.round(this.props.weather.currently.pressure)}</td>
                        </tr>
                    </tbody>
                </table>
                {/*<h2 className="short-term">{this.props.weather.hourly.summary.slice(0, -1) + " in Toronto." +*/}
                {/*" Here you can expect the details of the weather currently."}</h2>*/}
            </div>
        )
    }
}