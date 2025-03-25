//src/components/WeatherForecast/WeatherForecast.jsx
import React from "react";
import './weatherForecast.css'
import WeatherIcon from './WeatherIcon';
import WeatherData from './WeatherData';

function WeatherForecast(props) {
    return (
        <>
        <div className = 'weather'>
            <h3>Weather Forecast</h3>
            <WeatherData 
            day = { props.day }
            conditions = { props.conditions }
            time = { props.time }/>
        </div>
            <WeatherIcon 
                img = { props.img }
                imgAlt = { props.imgAlt }
            />
        </>
        
    )
}

export default WeatherForecast;