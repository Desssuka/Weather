import React, {useState} from 'react';
import s from "../../pages/weather/WeatherPage.module.css";
import weather from "../../store/weather";

const CitiesList = ({cities}) => {
    const [city, setCity] = useState('')
    return (
        <div className={s.page}>
            <div className={s.title}>
                Weather Page
            </div>
            <div className={s.search}>
                <input type="text" placeholder="Search for city" value={city} onChange={e => setCity(e.target.value)}/>
                <button onClick={() => weather.getCurrentCityWeather(city)}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                         stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4"/>
                    </svg>
                </button>
            </div>
            <div className={s.cities}>
                {cities}
            </div>
        </div>
    );
};

export default (CitiesList);