import React, {FC} from 'react';
import weather from "../../store/weather";
import s from "../../pages/weather/WeatherPage.module.css";
import {NavLink} from "react-router-dom";

interface CityListCardProps {
    id: number,
    lat: number,
    lon: number,
    city: string,
    cityWeather: string,
    temperature: number,
    icon: string
}

const CityListCard: FC<CityListCardProps> = ({id, lat, lon, city, cityWeather, temperature, icon}) => {
    return (
        <div className={s.full}>
            <NavLink className={s.link}
                     to={{pathname: `/weather/${id}`, state: {lat, lon, city}}}>
                <div key={id} className={s.card}>
                    <p>{city} </p>
                    <p> {cityWeather}</p>
                    <p><img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt=""/></p>
                    <p>{temperature}°C</p>
                </div>
            </NavLink>
            <div className={s.cross}>
                <button onClick={() => weather.deleteCity(id)}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                         stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                              d="M6 18L18 6M6 6l12 12"/>
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default CityListCard;