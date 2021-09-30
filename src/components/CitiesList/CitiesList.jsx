import React, {useEffect, useState} from 'react';
import s from "../../pages/weather/WeatherPage.module.css";
import weather from "../../store/weather";
import CityListCard from "../CityListCard/CityListCard";
import {observer} from "mobx-react-lite";

const CitiesList = observer(() => {
    const [city, setCity] = useState('')
    useEffect(() => {
        if (localStorage.getItem('cities')){
            weather.setLSCities()
        }
    },[])
    const citiesEl = weather.cities.map(v => {
        return <CityListCard id={v.id} lat={v.lat} lon={v.lon} city={v.city}
                             cityWeather={v.weather} temperature={v.temperature} icon={v.icon}/>
    })
    return (
        <div className={s.page}>
            <div className={s.title}>
                Weather Page
            </div>
                <form className={s.search} action="">
                    <input type="text" placeholder="Search for city" value={city}
                           onChange={e => setCity(e.target.value)}/>
                    <button onClick={(e) => {
                        e.preventDefault()
                        setCity('')
                        weather.getCurrentCityWeather(city)
                    }}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                             stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4"/>
                        </svg>
                    </button>
                </form>
            <div className={s.cities}>
                {citiesEl}
            </div>
        </div>
    );
});

export default (CitiesList);