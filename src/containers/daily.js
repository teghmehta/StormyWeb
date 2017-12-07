import React, {Component} from 'react'
import {connect} from "react-redux";

class Daily extends Component {

    render() {
        return(
            <div className="current-container">
                <h2 className="weather-condition">{this.props.condition}</h2>
                <h2 className="temperature">{this.props.temp}</h2>
            </div>
        )
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
            temp: Math.round((weather[0].daily.data[0].temperatureHigh - 32) * 5/9) + " °C",
            condition: weather[0].daily.data[0].summary
        };
    }
}

export default connect(mapStateToProps)(Daily);