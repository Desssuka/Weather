import React from 'react';
import {observer} from "mobx-react-lite";
import {withRouter} from "react-router-dom";
import CitiesList from "../../components/CitiesList/CitiesList";
import CityWeather from "../../components/CityWeather/CityWeather";

const WeatherPage = observer((props) => {
    const page = props.match.params.cityId || null
    return (
        <div>
            {(page ? <CityWeather/> : <CitiesList/>)}
        </div>
    )
})

export default withRouter(WeatherPage)