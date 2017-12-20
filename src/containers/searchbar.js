import React, {Component} from 'react'
import {connect } from 'react-redux'
import {fetchWeather} from "../actions/index";
import {bindActionCreators} from "redux";
import {getCity} from "../actions/city_name";
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

    renderCity(place) {
        if (place.address_components.length < 3) return place.formatted_address;
        else {
            let splitAddress = place.formatted_address.split(',');
            return splitAddress[0] + ', ' + splitAddress[1];
        }
    }

    onPlaceSelected(place) {
        var lat = place.geometry.viewport.f.f
        var long = place.geometry.viewport.b.b
        var city = this.renderCity(place);
        // this.props.fetchWeather(lat, long, this.props.unit);
        // this.props.getCity(null, null, city);
        this.setState({term: ''});

        const store = {
            key: city,
            value: {
                lat: lat,
                long: long
            }
        }

        this.props.createStore(store)
    }

    render() {
        return(
            <Autocomplete
                className="autocomplete"
                onPlaceSelected={this.onPlaceSelected}
                types={['(regions)']}
                value={this.state.term}
                onChange={this.onInputChange}
            />
        );
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({fetchWeather, getCity}, dispatch);
}

export default connect(null, matchDispatchToProps)(SearchBar)