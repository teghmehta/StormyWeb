import axios from 'axios';

const API_KEY = '9bb1e47fd64a2be700f417b9a7bf52e4/';
const ROOT_URL = `https://api.darksky.net/forecast/`
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(lat, long, city) {
    const url = ROOT_URL + API_KEY + lat + "," + long
    const request = axios.get(url)

    return{
        type: FETCH_WEATHER,
        payload: request
    };
}