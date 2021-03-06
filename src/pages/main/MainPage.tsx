import React, {FC, useEffect, useState} from 'react';
import {geolocated, GeolocatedProps} from "react-geolocated";
import weather from "../../store/weather";
import {observer} from "mobx-react-lite";
import s from './MainPage.module.css'

const MainPage: FC<GeolocatedProps> = observer((props) => {
    const [lat, setLat] = useState(0)
    const [lon, setLon] = useState(0)
    const [status, setStatus] = useState("Loading")
    //getting current user's geolocation
    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            setLat(position.coords.latitude)
            setLon(position.coords.longitude)
            setStatus('Loaded')
        })
    }, [])
    //setting user's city
    useEffect(() => {
        weather.getCurrentUserWeather(lat, lon)
    }, [status])

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
                {(status === 'Loading' ? <div>
                    {status}
                </div> : <div className={s.card}>
                    <p>{weather.userCity.city}</p>
                    <p>Today's weather - {weather.userCity.weather}</p>
                    <p>Today's temperature - {weather.userCity.temperature}°C</p>
                </div>)}

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