import "./futureDetails.css"
import WeatherSlider from "../weatherSlider"

const FuturesDetails = () =>{

    return(
        <div className="futures-details">
            <div className="nav d-flex position-relative">
                <div className="nav-item nav-item-active">
                    This week
                </div>
                <div className="nav-item">
                    This month
                </div>
            </div>
            <div className="future-forecast">
                <WeatherSlider />
            </div> 
        </div>
    )
}

export default FuturesDetails;