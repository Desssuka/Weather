import {makeAutoObservable} from "mobx";
import {getCurrentCityWeather, getCurrentUserWeather, getSevenDaysForecast} from "../api/geoApi";

class Weather {
    userCity = {}
    cities = []
    currentCity = []
    constructor() {
        makeAutoObservable(this)
    }
    //getting city weather of user from he's geo-data (latitude, longitude)
    getCurrentUserWeather = async(lat, lon) => {
        const {data} = await getCurrentUserWeather(lat, lon)
        this.userCity = {city: data.name, temperature: Math.floor(data.main.temp - 273.15),
            weather: data.weather[0].description, icon: data.weather[0].icon}
    }
    //getting weather of city by city-name
    getCurrentCityWeather = async (city) => {
        const {data} = await getCurrentCityWeather(city)
        this.cities = [...this.cities, {city: data.name, temperature: Math.floor(data.main.temp - 273.15),
            weather: data.weather[0].description, id: data.id, lat: data.coord.lat, lon:data.coord.lon, icon: data.weather[0].icon}]
    }
    //getting 7 days forecast from coords (latitude, longitude)
    getSevenDaysForecast = async (lat, lon) => {
        const {data} = await getSevenDaysForecast(lat, lon)
        //time formatting from UTC UNIX in seconds
        const format = (time) => {
            const day = new Date(time * 1e3)
            return day.toLocaleDateString()

        }
        this.currentCity = data.daily.map(v =>({
            dayTemp: v.temp.day,
            nightTemp: v.temp.night,
            weather: v.weather[0].description,
            icon: v.weather[0].icon,
            day: format(v.dt)
        }))
    }
    deleteCity = (id) => {
        this.cities = this.cities.filter((v) => v.id !== id)
        localStorage.setItem('cities', JSON.stringify(this.cities))
    }
    putCitiesInLS = () => {
        localStorage.setItem('cities', JSON.stringify(this.cities))
    }
    setLSCities = () => {
        this.cities = JSON.parse(localStorage.getItem('cities'))
    }
}

export default new Weather()