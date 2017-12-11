import { combineReducers } from 'redux';
import WeatherReducer from './reducer_weather';
import CityReducer from './reducer_city'

const rootReducer = combineReducers({
    weather: WeatherReducer,
    city: CityReducer
});

export default rootReducer;
