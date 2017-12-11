import axios from 'axios';

const API_KEY = 'AIzaSyDmHf8r2S-zi4Lm8R99BfpkIMyYa0ZDz2I';
const ROOT_URL = `https://maps.googleapis.com/maps/api/geocode/json?latlng=`;
const KEY_EQUALS = "&key=";
export const CITY_NAME = 'CITY_NAME';
export const CITY = 'CITY';

export function getCity(lat, long, city) {
    const url = ROOT_URL + lat + "," + long + KEY_EQUALS + API_KEY;
    var payload = city;
    if (city == null) {
        const request = axios.get(url);
        return{
            type: CITY_NAME,
            payload: request
        };
    } else {
        return{
            type: CITY,
            payload: payload
        };
    }
}