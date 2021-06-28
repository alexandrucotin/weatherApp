const initialState = [];

const citiesReducer = (state = initialState, action) => {
    switch (action.type) {
        case "RECEIVE_ADITIONAL_CITY":
            return state = [action.city, ...state]
        default:
            return state
    }
}

export default citiesReducer;