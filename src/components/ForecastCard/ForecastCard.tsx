import React, {FC} from 'react';
import s from "../CityWeather/CityWeather.module.css";

interface ForecastCardProps {
    day: string,
    icon: string,
    weather: string,
    dayTemp: number,
    nightTemp: number
}

const ForecastCard: FC<ForecastCardProps> = ({day, icon, weather,
                                                 dayTemp, nightTemp}) => {
    return (
        <div className={s.card}>
            <div>
                <p>{day}</p>
                <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt=""/>
                <p>{weather}</p>
                <p>Day - {dayTemp}°C</p>
                <p>Night - {nightTemp}°C</p>
            </div>
        </div>
    );
};

export default ForecastCard;