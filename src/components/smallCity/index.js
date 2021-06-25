import "./miniatureCity.css";

const SmallCity = ({city, weather}) => {

  function formatDate () {
    const today = new Date();
    const weekDays= ['Sunday', 'Monday', 'Tuesday','Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
    const date = `${weekDays[today.getDay()]} ${today.getDate()}, ${monthNames[today.getMonth()]}`;
    
    return date
  }

    return (
        <div className="miniatureCity">
            <div className="minCity-details">
                    <h2>{city}</h2>
                    <div className="date">{formatDate()}</div>
                    <div className="hours">2:38pm</div>
                </div>
            <div className="minCity-icon">
                <img src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`} alt="weather icon" />
            </div>
            <div className="minCity-temp">
                <div className="temperature">{Math.round(weather.main.temp)}&deg;</div>
            </div>
        </div>
    )
}

export default SmallCity;