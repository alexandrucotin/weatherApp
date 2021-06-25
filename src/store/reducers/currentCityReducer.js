const initialState = {};

const currentCityReducer = (state = initialState, action) => {
    switch(action.type){
        case "RECEIVE_CURRENT_CITY":
            console.log("CURRENT CITY REDUCER", action.city)
            return state = action.city
        case "CHANGE_CURRENT_CITY":
            return state = action.payload;
        default:
            return state;
    }
}

export default currentCityReducer;