import React, {Component} from 'react';
import SearchBar from '../containers/searchbar';
import {connect} from 'react-redux;'

export default class Header extends Component {
    render() {
        return(
            <header className="header">
                <div className='content'>
                    <img className="stormy-logo" src="../../res/stormy_icon.png "/>
                    <h1 className="stormy-title">Stormy Web</h1>
                    <SearchBar/>
                </div>
                <div className="prefs">
                    {/*<h2 className="city">{this.props.city}</h2>*/}
                </div>
            </header>
        );
    }
}
//
// function mapStateToProps(state) {
//     this.props = {
//     }
// }
//
// export default connect(mapStateToProps)(Header);