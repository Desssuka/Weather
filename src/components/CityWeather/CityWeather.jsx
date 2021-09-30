import React, {useEffect} from 'react';
import {useLocation, withRouter} from 'react-router-dom'
import weather from "../../store/weather";
import {observer} from "mobx-react-lite";
import s from './CityWeather.module.css'

const CityWeather = observer((props) => {
    const state = useLocation().state || null
    useEffect(() => {
        if(state){
            weather.getSevenDaysForecast(state.lat, state.lon)
        }
    },[])
    const forecast = weather.currentCity.map((v)=>{
        return(
            <div className={s.card}>
                <div>
                    <p>Weather - {v.weather}</p>
                    <p>Day - {v.dayTemp}°C</p>
                    <p>Night - {v.nightTemp}°C</p>
                </div>
                <div>
                    <img src={`http://openweathermap.org/img/wn/${v.icon}@2x.png`} alt=""/>
                    <p>Date - {v.day}</p>
                </div>
            </div>
        )
    })
    console.log(forecast)
    return (
        <div className={s.page}>
            <div className={s.title}>{state.city}</div>
            <div className={s.cards}>
                {forecast}
            </div>
        </div>
    );
});

export default withRouter(CityWeather);