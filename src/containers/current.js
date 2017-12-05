import React, {Component} from 'react'
import {connect} from "react-redux";

class Current extends Component {

    render() {
        return(
            <div>
                <h2 className="weather-condition">{this.props.condition}</h2>
                <h2 className="temperature">{this.props.temp}</h2>
            </div>
        )
    }
}

function mapStateToProps({weather}) {
    console.log(weather)
    if (weather.length === 0) {
        return {
            condition: "No Condition",
            temp: "No Temperature",
        };
    } else {
        return {
            temp: weather[0].main.temp,
            condition: weather[0].weather[0].main
        };
    }
}

export default connect(mapStateToProps)(Current);