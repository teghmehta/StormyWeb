import React, {Component} from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

export default class LocationDropDown extends Component {

    constructor(props) {
        super(props);
        this.state = {value: 0};
    }

    handleChange = (event, index, value) => this.setState({value});

    renderItems(location, index) {
        let city = location.key
        console.log(location, index, "renderItems")

        if (index != 0) {
            return (
                <MenuItem key={index+1} value={index+1} primaryText={city} />
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

        return (
            <DropDownMenu autoWidth={false}
                selectedMenuItemStyle={itemStyle} labelStyle={style}
                className="location-drop" value={this.state.value} onChange={this.handleChange} openImmediately={false}>
                <MenuItem value={0} primaryText="Follow Me"><img className="drop-place-icon" src="../../res/ic_place_white_48dp.png"/></MenuItem>
                {this.props.locations.map(this.renderItems)}
            </DropDownMenu>
        );
    }
}