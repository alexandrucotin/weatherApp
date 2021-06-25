import "./currentWeather.css";
import {useSelector} from "react-redux";

const LargeCity = () => {
    const state = useSelector((state) => state);

    function formatDate (dt) {
        const date = new Date(dt);
        const weekDays= ['Sunday', 'Monday', 'Tuesday','Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];
        const formatedDate = `${weekDays[date.getDay()]} ${date.getDate()}, ${monthNames[date.getMonth()]}`;
        
        return formatedDate
    }
    return (
        <div className="currentWeather">
            <div className="mainBox">
            </div>
            <div className="contentBox">
            <h2>Verona</h2>
                    {/* <h2>{state.currentCity.name}</h2> */}
                    <div className="date">{formatDate(state.currentCity.current.dt)}</div>
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