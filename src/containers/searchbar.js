import React, {Component} from 'react'
import {connect } from 'react-redux'
import {fetchWeather} from "../actions/index";
import {bindActionCreators} from "redux";

class SearchBar extends Component {
    constructor(props) {
        super(props);

        //term is the input
        this.state = {term: ''};
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(event) {
        this.setState({term: event.target.value});
    }

    onFormSubmit(event) {
        event.preventDefault();

        //fetch weather
        this.props.fetchWeather(this.state.term);
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