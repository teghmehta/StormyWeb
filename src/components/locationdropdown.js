import React, {Component} from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import {SELECTED} from '../containers/header';

export default class LocationDropDown extends Component {

    constructor(props) {
        super(props);
        this.state = {value: 0, index: 0};
        this.renderItems = this.renderItems.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (event, index, value) => {
        this.setState({index});
        // this.props.onSelectLocation(value);
    };

    renderItems(location, index) {
        let city = location.key;

        if (index != 0 && city != SELECTED) {
            return (
                <MenuItem key={index+1} value={index} onClick={() => this.props.onSelectLocation(location)} primaryText={city}> <button onClick={() =>
                    this.props.removeStore(city, location)} className="delete-button">Delete</button></MenuItem>
            );
        }
    }

    render() {
        const itemStyle = {
            color: '#ffc107'
        }

        const style = {
            color: 'white',
        }

        const menuStyle = {
            width: "300px"
        }

        return (
            <DropDownMenu autoWidth={false}
                selectedMenuItemStyle={itemStyle} labelStyle={style}
                          menuStyle={menuStyle}
                className="location-drop" value={this.state.index} onChange={this.handleChange} openImmediately={false}>

                <MenuItem key={0} value={0} onClick={() => this.props.onSelectLocation(null)} primaryText="Follow Me"><img className="drop-place-icon" src="../../res/ic_place_white_48dp.png"/></MenuItem>
                {this.props.locations.map(this.renderItems)}
            </DropDownMenu>
        );
    }
}