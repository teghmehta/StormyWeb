import React, {Component} from 'react'
import {connect} from "react-redux";

class Daily extends Component {
    renderWeather(dailyData) {
        return (
            <div key={dailyData.time} className= "current-container">
                <h2 className="weather-condition">{Math.round((dailyData.temperatureHigh - 32) * 5/9) + " °C "} </h2>
                <h2 className="temperature">{dailyData.summary}</h2>
            </div>
        );
    }

    render() {
        if (!this.props.data) {
            return(
                <div className="current-container">
                    <h2 className="weather-condition">{"No Data"} </h2>
                </div>
            )
        } else {
            return(
                <div className="current-container">
                    {this.props.data.map(this.renderWeather)}
                </div>
            )
        }
    }
}

function mapStateToProps({weather}) {
    console.log(weather)
    if (!weather[0]) {
        return {
            condition: "No Condition",
            temp: "No Temperature",
        };
    } else {
        return {
            data: weather[0].daily.data,
            temp: Math.round((weather[0].daily.data[0].temperatureHigh - 32) * 5/9) + " °C",
            condition: weather[0].daily.data[0].summary
        };
    }
}

export default connect(mapStateToProps)(Daily);