import React, {Component} from 'react';
import SearchBar from './searchbar';

export default class Header extends Component {

    render() {
        var location = !this.props.weather ? 'Select a City' : "Using GPS";
        return(
            <header className="header">
                <div className='content'>
                    <img className="stormy-logo" src="../../res/stormy_icon.png "/>
                    <h1 className="stormy-title">Stormy Web</h1>
                    <SearchBar class="search-container"/>
                    <div className="location-div">
                        <h2 className="city">{location}</h2>
                        <img className="place-icon" src="../../res/ic_place_white_48dp.png"/>
                    </div>
                </div>
            </header>
        );
    }
}