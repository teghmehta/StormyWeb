import React, {Component} from 'react'
import {connect } from 'react-redux'
import {fetchWeather} from "../actions/index";
import {bindActionCreators} from "redux";
import Autocomplete from 'react-google-autocomplete';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        //term is the input
        this.state = {lat: 0, long: 0, term: ''};
        this.onInputChange = this.onInputChange.bind(this);
        this.onPlaceSelected = this.onPlaceSelected.bind(this);

    }

    onInputChange(event) {
        this.setState({term: event.target.value});
    }

    onPlaceSelected(place) {
        console.log(place);
        var lat = place.geometry.viewport.f.f
        var long = place.geometry.viewport.b.b
        var city = place.name + ", " + place.address_components[2].shortName
        console.log (lat, long);
        this.props.fetchWeather(lat, long, this.props.unit, city);
        this.setState({term: ''});
    }

    render() {
        return(
            <Autocomplete
                className="location-form"
                onPlaceSelected={this.onPlaceSelected}
                types={['(regions)']}
            />
        );
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({fetchWeather}, dispatch);
}

export default connect(null, matchDispatchToProps)(SearchBar)