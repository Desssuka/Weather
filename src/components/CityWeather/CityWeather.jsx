import React, {useEffect} from 'react';
import {useLocation, withRouter} from 'react-router-dom'
import weather from "../../store/weather";
import {observer} from "mobx-react-lite";
import s from './CityWeather.module.css'
import ForecastCard from "../ForecastCard/ForecastCard";

const CityWeather = observer((props) => {
    const state = useLocation().state || null
    useEffect(() => {
        if(state){
            weather.getSevenDaysForecast(state.lat, state.lon)
        }
    },[])
    const forecast = weather.currentCity.map((v)=>{
        return(
            <ForecastCard weather={v.weather} dayTemp={v.dayTemp} icon={v.icon}
                          nightTemp={v.nightTemp} day={v.day}/>
        )
    })
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