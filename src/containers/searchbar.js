import React, {Component} from 'react'
import {connect } from 'react-redux'
import {fetchWeather} from "../actions/index";
import {bindActionCreators} from "redux";

class SearchBar extends Component {
    constructor(props) {
        super(props);

        //term is the input
        this.state = {lat: 0, long: 0, term: ''};
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    componentDidMount() {
        if ("geolocation" in navigator) {
            let self = this;
            navigator.geolocation.getCurrentPosition(function(position) {
                self.setState({
                    lat: position.coords.latitude,
                    long: position.coords.longitude
                });
            });
        } else {
            alert("Please allow location!");
        }
    }

    onInputChange(event) {
        this.setState({term: event.target.value});
    }

    onFormSubmit(event) {
        event.preventDefault();
        this.props.fetchWeather(this.state.lat, this.state.long, this.state.term);
        this.setState({term: ''});
    }

    render() {
        return(
            <form className="location-form" onSubmit={this.onFormSubmit}>
                <input
                className="input-group"
                placeholder="Enter a location"
                value={this.state.term}
                onChange={this.onInputChange}/>
                <button className="location-button" type="submit">Submit</button>
            </form>
        );
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({fetchWeather}, dispatch);
}

export default connect(null, matchDispatchToProps)(SearchBar)