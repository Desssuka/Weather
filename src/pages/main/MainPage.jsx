import React, {useEffect} from 'react';
import {geolocated} from "react-geolocated";
import weather from "../../store/weather";
import {observer} from "mobx-react-lite";
import s from './MainPage.module.css'

const MainPage = observer((props) => {
    useEffect(()=> {
        weather.getCurrentUserWeather(54.799, 55.9053)
    },[])
    return (
        !props.isGeolocationAvailable ? (
            <div>Your browser does not support Geolocation</div>
        ) : !props.isGeolocationEnabled ? (
            <div>Geolocation is not enabled</div>
        ) : props.coords ? (
            <div className={s.page}>
                <div className={s.title}>
                    Your current city
                </div>
                <div className={s.card}>
                    <p>{weather.userCity.city}</p>
                    <p>Today's weather - {weather.userCity.weather}</p>
                    <p>Today's temperature - {weather.userCity.temperature}°C</p>
                </div>
            </div>
        ) : (
            <div>Getting the location data&hellip; </div>
        )
    );
});

export default geolocated({
    positionOptions: {
        enableHighAccuracy: false
    },
    userDecisionTimeout: 5000,
})(MainPage);