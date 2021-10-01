import axios from "axios";

const APIkey = 'd2cda96c7881426eff7d69f04226b87b'
const instance = axios.create({
    baseURL: 'http://api.openweathermap.org/data/2.5/'
})

export const getCurrentUserWeather = (lat:number, lon:number) => {
    return instance.get(`weather?lat=${lat}&lon=${lon}&appid=${APIkey}`, {})
}
export const getCurrentCityWeather = (city:string) => {
    return instance.get(`weather?q=${city}&appid=${APIkey}`, {})
}
export const getSevenDaysForecast = (lat:number, lon:number) => {
    return instance.get(`onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely,current&units=metric&appid=${APIkey}`, {})
}