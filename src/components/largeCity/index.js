import "./currentWeather.scss";
import { useSelector } from "react-redux";
import Moment from 'react-moment';
const LargeCity = () => {
    const state = useSelector((state) => state);
    return (
        <div className="currentWeather">
            <div className="mainBox">
            </div>
            <div className="contentBox">
                <h2>{state.currentCity.cityInfo.results[0].formatted_address.split(",")[0]}</h2>
                <div className="date"><Moment date={state.currentCity.current.dt * 1000} format="D MMM YYYY" /> </div>
                <div className="forecast">{state.currentCity.current.weather[0].main}</div>
            </div>
            <div className="tempBox">
                <div className="temperature">{Math.round(state.currentCity.current.temp)}&deg;</div>
                <div className="icon">
                    <img src={`http://openweathermap.org/img/w/${state.currentCity.current.weather[0].icon}.png`} alt="weather icon" />
                </div>
            </div>
        </div>
    )
}

export default LargeCity;