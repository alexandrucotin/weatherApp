const initialState = false;

const loaderReducer = (state = initialState, action) => {
    switch (action.type) {
        case "CHANGE_LOADER_STATE":
            return state = action.state
        default:
            return state;
    }
}

export default loaderReducer;