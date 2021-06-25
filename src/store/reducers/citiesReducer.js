const initialState = [];

const citiesReducer = (state = initialState, action) => {
    switch(action.type){
        case "ADD_CITY":
            return state.push(action.payload)
        default:
            return state
    }
}

export default citiesReducer;