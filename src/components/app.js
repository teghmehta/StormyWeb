import React, {Component} from 'react'
import Weather from '../containers/weather';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default class App extends Component {
    render() {
        return(
            <MuiThemeProvider>
                <Weather/>
            </MuiThemeProvider>
        )
    }
}