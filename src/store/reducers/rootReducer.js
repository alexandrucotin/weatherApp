import {combineReducers} from "redux"
import currentCityReducer from './currentCityReducer';
import citiesReducer from "./citiesReducer";

const rootReducer = combineReducers ({
    currentCity : currentCityReducer,
    cities: citiesReducer,
})

export default rootReducer;