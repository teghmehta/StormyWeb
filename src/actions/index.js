import axios from 'axios';

const API_KEY = 'b557e954aacd69c13cf8200346253152';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/weather?q=`
const APP_ID = `&appid=`

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = ROOT_URL + city + APP_ID + API_KEY
    const request = axios.get(url)

    return{
        type: FETCH_WEATHER,
        payload: request
    };
}