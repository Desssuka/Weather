import React from 'react';
import s from "../CityWeather/CityWeather.module.css";

const ForecastCard = (props) => {
    return (
        <div className={s.card}>
            <div>
                <p>{props.day}</p>
                <img src={`http://openweathermap.org/img/wn/${props.icon}@2x.png`} alt=""/>
                <p>{props.weather}</p>
                <p>Day - {props.dayTemp}°C</p>
                <p>Night - {props.nightTemp}°C</p>
            </div>
        </div>
    );
};

export default ForecastCard;