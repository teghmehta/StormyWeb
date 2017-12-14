import axios from 'axios';

const API_KEY = '9bb1e47fd64a2be700f417b9a7bf52e4/';
const ROOT_URL = `https://api.darksky.net/forecast/`
const UNITS = "?units="
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(lat, long, unit) {
    const url = ROOT_URL + API_KEY + lat + "," + long + UNITS + unit;
    const request = axios.get(url);
    return{
        type: FETCH_WEATHER,
        payload: request
    };
}