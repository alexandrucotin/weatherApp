import './todaysDetails.css';
import {useSelector} from "react-redux";

const TodaysDetails = () => {
    const state = useSelector((state) => state);

    const formatHour = (dt) =>{

        const date = new Date(dt*1000)
            const formatedHour = date.getHours();
            return formatedHour
    }
    return(
        <div>
            <div >
                <h3 className="forecast-title">Today</h3>
            </div>
            <div className="row todays-weather">
                <div className="col-xs-12">
                    <div className="line-through"></div>
                    <div className="row mb-4">
                        <div className="col-md-12 text-center now hidden-xs">Now</div>
                        <div className="col-xs-3 col-md-4 big-temp">32&deg;</div>
                        <div className="col-xs-3 col-md-3 d-flex align-items-center justify-content-center">
                            <div className="big-bullet"></div>
                        </div>
                        {/* <div className="col-xs-4  hidden-md hidden-lg hidden-xl">Now</div> */}
                    </div>
                    {
                        state.currentCity.hourly.filter((temp) => {
                            const now = new Date();
                            const todayAtMidnight = now.setHours(24,0,0,0);
                            if ((todayAtMidnight > temp.dt*1000)){
                                    return temp
                            }
                        }).map((filteredTemp) => {
                            return (
                                <div className="row  mb-4">
                                    <div className="col-xs-4 col-md-5 small-temp">{Math.round(filteredTemp.temp)}&deg;</div>
                                    <div className="col-xs-4 col-md-2 d-flex align-items-center justify-content-center">
                                        <div className="small-bullet"></div>
                                    </div>
                                    <div className="col-xs-4 col-md-5 time">{formatHour(filteredTemp.dt)}</div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )

}

export default TodaysDetails;