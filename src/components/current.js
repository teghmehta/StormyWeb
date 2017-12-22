import React, {Component} from 'react';

export default class Current extends Component {

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
                <h3 className="current-label">Current</h3>
                <div className="current-temp-icon">
                    <h2 className="weather-condition">{this.props.weather.currently.summary}</h2>
                    <img className="current-weather-icon" src={this.props.renderIcon(this.props.weather.currently.icon)} />
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
                            <td>{Math.round(100 * this.props.weather.currently.humidity) + "%"}</td>
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
            </div>
        )
    }
}