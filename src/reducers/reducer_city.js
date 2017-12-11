import {CITY_NAME} from '../actions/city_name';
import {CITY} from  '../actions/city_name';

export default function(state = [], action) {
    switch (action.type) {
        case CITY_NAME:
            return [action.payload.data, ...state];
        case CITY: //This is if you click a place!
            return [action.payload, ...state];
    }

    return state;
}
