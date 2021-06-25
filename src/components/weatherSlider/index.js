import React, { Component } from "react";
import Slider from "react-slick";
import "./weatherSlider.css"
import {useSelector} from "react-redux";

const WeatherSlider = () => {

    const state = useSelector((state) => state);
    
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows:false
      };
      console.log(state)

      function formatDate (dt) {
        const date = new Date(dt);
        console.log(date)
        const weekDays= ['Sunday', 'Monday', 'Tuesday','Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const formatedDate = `${weekDays[date.getDay()]}`;
        return formatedDate
    }

    return (
        <Slider {...settings}>
            {
                state.currentCity.daily.map((day) => {
                    return(
                        <div className="forecast-item ">
                        <div className="forecast-day">
                            {formatDate(day.dt *1000)}
                        </div>
                        <div className="forecast-temp">
                        {Math.round(day.temp.day)}&deg;
                        </div>
                        <div className="forecast-day">
                        <img src={`http://openweathermap.org/img/w/${day.weather[0].icon}.png`} alt="weather icon" />
                        </div>
                    </div>
                    )
                })
            }
        </Slider>
    );
}

export default WeatherSlider;