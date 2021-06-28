import { combineReducers } from "redux"
import currentCityReducer from './currentCityReducer';
import citiesReducer from "./citiesReducer";
import currentLocationReducer from "./currentLocationReducer"
import loaderReducer from "./loaderReducer.js"

const rootReducer = combineReducers({
    currentCity: currentCityReducer,
    cities: citiesReducer,
    currentLocation: currentLocationReducer,
    loading: loaderReducer
})

export default rootReducer;