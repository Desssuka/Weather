import React from 'react';
import s from './WeatherPage.module.css'
import weather from "../../store/weather";
import {observer} from "mobx-react-lite";
import {NavLink, withRouter} from "react-router-dom";
import CitiesList from "../../components/CitiesList/CitiesList";
import CityWeather from "../../components/CityWeather/CityWeather";

const WeatherPage = observer((props) => {
    const page = props.match.params.cityId || null
    const citiesEl = weather.cities.map((v) => {
        return (
            <div className={s.full}>
                <NavLink className={s.link}
                         to={{pathname: `/weather/${v.id}`, state: {lat: v.lat, lon: v.lon, city: v.city}}}>
                    <div key={v.id} className={s.card}>
                        <p>{v.city} </p>
                        <p> {v.weather}</p>
                        <p><img src={`http://openweathermap.org/img/wn/${v.icon}@2x.png`} alt=""/></p>
                        <p>{v.temperature}°C</p>
                    </div>
                </NavLink>
                <div className={s.cross}>
                    <button onClick={() => weather.deleteCity(v.id)}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                             stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                  d="M6 18L18 6M6 6l12 12"/>
                        </svg>
                    </button>
                </div>
            </div>

        )
    })
    return (
        <div>
            {(page ? <CityWeather/> : <CitiesList cities={citiesEl}/>)}
        </div>
    )
})

export default withRouter(WeatherPage)