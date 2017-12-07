import React, {Component} from 'react';
import SearchBar from './searchbar';
import {connect} from 'react-redux';

class Header extends Component {
    render() {
        return(
            <header className="header">
                <div className='content'>
                    <img className="stormy-logo" src="../../res/stormy_icon.png "/>
                    <h1 className="stormy-title">Stormy Web</h1>
                    <SearchBar class="search-container"/>
                    <div className="location-div">
                        <h2 className="city">{}</h2>
                        <img className="place-icon" src="../../res/ic_place_white_48dp.png"/>
                    </div>
                </div>
            </header>
        );
        //this.props.weather
    }
}

function mapStateToProps({weather}) {
    return {
        weather: !weather[0] ? 'Select a City' : weather
};
}

export default connect(mapStateToProps)(Header);