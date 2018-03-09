import React, {Component} from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MapsPlace from 'material-ui/svg-icons/navigation/more-vert';
import {SELECTED} from '../containers/header';

export default class LocationDropDown extends Component {

    constructor(props) {
        super(props);
        this.state = {value: 0, index: 0};
        this.renderItems = this.renderItems.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (event, index) =>  this.setState({index});

    updateDimensions() {
        if(window.innerWidth < 500) {
            this.setState({ width: 450, height: 102 });
        } else {
            let update_width  = window.innerWidth-100;
            let update_height = Math.round(update_width/4.4);
            this.setState({ width: update_width, height: update_height });
        }
    }

    componentDidMount() {
        this.updateDimensions();
        window.addEventListener("resize", this.updateDimensions.bind(this));
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions.bind(this));
    }


    renderItems(location, index) {
        let city = location.key;

        if (index !== 0 && city !== SELECTED) {
            return (
                <MenuItem key={index+1} value={index} onClick={() => this.props.onSelectLocation(location)} primaryText={city}> <button onClick={() =>
                    this.props.removeStore(city)} className="delete-button">Delete</button></MenuItem>
            );
        }
    }

    changeIndex(key) {
        let index;
        if (!key) {
            index = 0;
        } else {
            for (let i = 0; i < this.props.locations.length; i++) {
                if (this.props.locations[i].key === key) {
                    index = i;
                }
            }
        }

        console.log(index, key, this.props.locations, "changeIndex");
        this.setState({value: index, index: index});
    }

    followMe() {
        this.setState({value: 0, index: 0});
    }

    render() {
        const itemStyle = {
            color: '#ffc107',
        };

        const style = {
            color: 'white',
        };
        const menuStyle = {
            width: '400px',
        };
        if (window.innerWidth <= 399) {

            const menuStyle = {
                width: '250px',
            };
        }
        return (
            <IconMenu
                className="location-icon-menu"
                iconButtonElement={<IconButton><MapsPlace /></IconButton>}
                anchorOrigin={{horizontal: 'left', vertical: 'top'}}
                targetOrigin={{horizontal: 'left', vertical: 'top'}}
                selectedMenuItemStyle={itemStyle}
                menuStyle={menuStyle}
                maxHeight={272}
            >
                <MenuItem key={0} value={0} onClick={() => this.props.onSelectLocation(null)}
                          primaryText="Follow Me"><img className="drop-place-icon"
                                                       src="../../res/ic_place_white_48dp.png"/></MenuItem>
                {this.props.locations.map(this.renderItems)}
            </IconMenu>
        );
    }
}