import "./weatherSlider.scss"
import { useSelector } from "react-redux";
import SwiperCore, { Pagination, } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';
import { Fragment } from "react";

// install Swiper modules
SwiperCore.use([Pagination]);

const WeatherSlider = ({ tab }) => {

    const state = useSelector((state) => state);

    function formatDate(dt) {
        const date = new Date(dt);
        const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const formatedDate = `${weekDays[date.getDay()]}`;
        return formatedDate
    }

    switch (tab) {
        case "MONTH":
            return (
                <Swiper
                    slidesPerGroup={3}
                    spaceBetween={20}
                    slidesPerView={3}
                    pagination={{ clickable: true }}
                >
                    {
                        state.currentCity.daily.map((day) => {
                            return (
                                <SwiperSlide>
                                    <div className="forecast-item ">
                                        <div>Month</div>
                                        <div className="forecast-day">
                                            {formatDate(day.dt * 1000)}
                                        </div>
                                        <div className="forecast-temp">
                                            {Math.round(day.temp.day)}&deg;
                                    </div>
                                        <div className="forecast-day">
                                            <img src={`http://openweathermap.org/img/w/${day.weather[0].icon}.png`} alt="weather icon" />
                                        </div>
                                    </div>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            )
        case "WEEK":
            return (
                <Fragment>
                    <Swiper
                        spaceBetween={10}
                        slidesPerView={2}
                        pagination={{ el: '.custom-pagination', clickable: true }}
                    >
                        {
                            state.currentCity.daily.map((day, index) => {
                                return (
                                    <SwiperSlide key={index}>
                                        <div className="forecast-item ">
                                            <div className="forecast-day">
                                                {formatDate(day.dt * 1000)}
                                            </div>
                                            <div className="forecast-temp">
                                                {Math.round(day.temp.day)}&deg;
                                            </div>
                                            <div className="forecast-day">
                                                <img src={`http://openweathermap.org/img/w/${day.weather[0].icon}.png`} alt="weather icon" />
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                )
                            })
                        }
                    </Swiper>
                    <div className="d-flex justify-content-center">
                        <div className="custom-pagination"></div>
                    </div>
                </Fragment>
            );
        default:
            return null
    }
}

export default WeatherSlider;