import { getWeather } from '../../services/getWeather';

export function receiveCurrentCity(city) {
    return {
      type: "RECEIVE_CURRENT_CITY",
      city,
    };
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

export const handleInitialData = () => 
    async (dispatch) => {
      const currentCity = await getWeather(45.4167,11.0333)
      console.log("ACTION HANDLE INITIAL DATA", currentCity)
       return dispatch(receiveCurrentCity(currentCity));
    };
  