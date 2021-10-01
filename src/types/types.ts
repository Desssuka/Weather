export interface IUserCity {
    city?: string,
    temperature?: number,
    weather?: string,
    icon?: string,
}
export interface ICities {
    city?:string,
    temperature?:number,
    weather?:string,
    id?:number,
    lat?:number,
    lon?:number,
    icon?:string
}
export interface IForecast {
    dayTemp?: number,
    nightTemp?:number,
    weather?: string,
    icon?:string,
    day?: string
}

//{city: data.name, temperature: Math.floor(data.main.temp - 273.15),
//             weather: data.weather[0].description, id: data.id, lat: data.coord.lat, lon:data.coord.lon, icon: data.weather[0].icon}]
//         localStorage.setItem('cities', JSON.stringify(this.cities)

//dayTemp: v.temp.day,
//             nightTemp: v.temp.night,
//             weather: v.weather[0].description,
//             icon: v.weather[0].icon,
//             day: format(v.dt)