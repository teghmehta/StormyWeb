import React, {Component} from 'react'

export default class Current extends Component {
    render() {
        if (!this.props.weather) {
            return(
                <div className="current-container">
                    <h2 className="weather-condition">{"No Condition"}</h2>
                    <h2 className="temperature">{"No Temperature"}</h2>
                </div>
            )
        } else {
            return(
                <div className="current-container">
                    <h2 className="weather-condition">{Math.round((this.props.weather.currently.temperature - 32) * 5 / 9) + " °C"}</h2>
                    <h2 className="temperature">{this.props.weather.currently.summary}</h2>
                </div>
            )
        }
    }
}