import { getOneCallWeather, getFullCityData } from '../../services/apiServices';

const initialData = {
    currentCity: {
        lat: 51.5074, // LONDON
        lon: 0.1278
    },
    city_1: {
        lat: 51.5074, // LONDON
        lon: 0.1278
    },
    city_2: {
        lat: 45.4167, // Verona
        lon: 11.0333
    }
}

export const changeLoadingStatus = (state) => {
    return (dispatch) => {
        dispatch({
            type: "CHANGE_LOADER_STATE",
            state
        })
    }
}

export function receiveCurrentCity(city) {
    return {
        type: "RECEIVE_CURRENT_CITY",
        city,
    };
}
export const receiveMontlyWeather = (weather) => {
    return (dispatch) => {
        dispatch({
            type: "RECEIVE_CURRENT_CITY_MONTHLY",
            weather
        })
    }
}

export const receiveAditionalCity = (city) => {
    return (dispatch) => {
        dispatch({
            type: "RECEIVE_ADITIONAL_CITY",
            city
        })
    }
}

export const setCurrentLocation = (location) => {
    return (dispatch) => {
        dispatch({
            type: "SET_CURRENT_LOCATION",
            location
        })
    }
}

export const getCurrentLocation = () => {
    return (dispatch) => {
        dispatch(changeLoadingStatus(true))
        navigator.geolocation.getCurrentPosition((position) => {
            getFullCityData(position.coords.latitude, position.coords.longitude).then((data) => {
                dispatch(changeCurrentCity(data))
                dispatch(changeLoadingStatus(false))
            })
        });
    }
}

export const getSearchedCity = (lat, long, type) => {
    return (dispatch) => {
        dispatch(changeLoadingStatus(true))
        getFullCityData(lat, long).then((data) => {
            if (type === 1) {
                dispatch(receiveAditionalCity(data))
            } else {
                dispatch(changeCurrentCity(data))
            }
            dispatch(changeLoadingStatus(false))
        })
    }
}

export const addCity = (payload) => {
    return (dispatch) => {
        dispatch({
            type: "ADD_CITY",
            payload: payload
        })
    }
}


export const changeCurrentCity = (payload) => {
    return (dispatch) => {
        dispatch({
            type: "CHANGE_CURRENT_CITY",
            payload: payload
        })
    }
}

export const handleInitialData = () => {
    return async (dispatch) => {
        Promise.all([
            // Large City
            getFullCityData(initialData.currentCity.lat, initialData.currentCity.lon),
            // Small City
            getFullCityData(initialData.city_1.lat, initialData.city_1.lon),
            getFullCityData(initialData.city_2.lat, initialData.city_2.lon),
        ]).then(([currentCity, city_1, city_2]) => {
            dispatch(receiveCurrentCity(currentCity))
            dispatch(receiveAditionalCity(city_1))
            dispatch(receiveAditionalCity(city_2))
        })
    }
};
