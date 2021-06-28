const initialState = {};

const currentCityReducer = (state = initialState, action) => {
    switch(action.type){
        case "RECEIVE_CURRENT_CITY":
            return state = action.city
        case "RECEIVE_CURRENT_CITY_MONTHLY":
            return state.monthlyWeather = action.weather
        case "CHANGE_CURRENT_CITY":
            return state = action.payload;
        default:
            return state;
    }
}

export default currentCityReducer;