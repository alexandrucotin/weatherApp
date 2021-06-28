import "./miniatureCity.scss";
import Moment from 'react-moment';
import 'moment-timezone';
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux"
import { actions } from '../../store/index'

const SmallCity = ({ city }) => {

    const dispatch = useDispatch()
    const { changeCurrentCity } = bindActionCreators(actions, dispatch)
    return (
        <div className="miniatureCity" onClick={(e) => changeCurrentCity(city)}>
            <div className="minCity-details">
                <h2>{city.cityInfo.results[0].formatted_address.split(",")[0]}</h2>
                <div className="date"><Moment date={city.current.dt * 1000} format="D MMM YYYY" /> </div>
                <div className="hours"><Moment date={city.current.dt * 1000} format="h:mm a" /> </div>
            </div>
            <div className="minCity-icon">
                <img src={`http://openweathermap.org/img/w/${city.current.weather[0].icon}.png`} alt="weather icon" />
            </div>
            <div className="minCity-temp">
                <div className="temperature">{Math.round(city.current.temp)}&deg;</div>
            </div>
        </div>
    )
}

export default SmallCity;