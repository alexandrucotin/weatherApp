
import { Fragment, useState } from "react";
import plus from "../../assets/Plus.png";
import TodaysDetails from "../todaysDetails";
import FuturesDetails from "../futureDetails";
import WeatherSlider from "../weatherSlider"

import Moment from 'react-moment';
import './detailsWeatherMobile.scss';

import { useSelector } from "react-redux";

const DetailsMobileComponent = () => {
    const [addingCity, setAddingCity] = useState(false)
    const state = useSelector((state) => state);

    return (
        <Fragment>
            <div className="linear-background py-5 mb-5 px-3">
                <div className="currentWeather-mobile">
                    <div className="contentBox-mobile">
                        <h2 className="address-mobile">{state.currentCity.cityInfo.results[0].formatted_address.split(",")[0]}</h2>
                        <div className="date-mobile"><Moment date={state.currentCity.current.dt * 1000} format="D MMM YYYY" /> </div>
                        <div className="forecast-mobile">{state.currentCity.current.weather[0].main}</div>
                        <div className="d-flex align-items-center justify-content-around">
                            <div className="">
                                <img src={`http://openweathermap.org/img/w/${state.currentCity.current.weather[0].icon}.png`} alt="weather icon" className="icon-mobile" />
                            </div>
                            <div className="temperature-mobile">{Math.round(state.currentCity.current.temp)}&deg;</div>
                        </div>
                    </div>
                </div>
                <div className="todays-temp-mobile d-flex">
                    <div className="line-through"></div>
                    {
                        state.currentCity.hourly.filter((temp) => {
                            const now = new Date();
                            const todayAtMidnight = now.setHours(24, 0, 0, 0);
                            if ((todayAtMidnight > temp.dt * 1000)) {
                                return temp
                            }
                        }).map((filteredTemp, index) => {
                            if (index === 0) {
                                return (
                                    <div className="row mx-3">
                                        <div className="time-now col-xs-12">Now</div>
                                        <div className="col-xs-12 d-flex justify-content-center">
                                            <div className="big-bullet"></div>
                                        </div>
                                        <div className="big-temp col-xs-12">{Math.round(filteredTemp.temp)}&deg;</div>
                                    </div>
                                )
                            } else {
                                return (
                                    <div className="row mx-3 text-center">
                                        <div className="time-mobile col-xs-12"><Moment date={filteredTemp.dt * 1000} format="H a" /> </div>
                                        <div className="col-xs-12 d-flex justify-content-center">
                                            <div className="small-bullet"></div>
                                        </div>
                                        <div className="small-temp-mobile col-xs-12">{Math.round(filteredTemp.temp)}&deg;</div>
                                    </div>
                                )
                            }
                        })
                    }
                </div>

                <WeatherSlider tab={"WEEK"} />
            </div>
        </Fragment>
    )
}

export default DetailsMobileComponent;