const initialState = {};

const currentLocationReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_CURRENT_LOCATION":
            return state = action.location
        default:
            return state;
    }
}

export default currentLocationReducer;