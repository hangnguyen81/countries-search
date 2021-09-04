const Weather =({city,weather}) =>{
    return(
        <div className='weather'>
                <h3>Weather in {city} city</h3>
                <div className = 'weather_info'>
                    <img src={weather.weather_icons[0]} alt='Current weather'/>
                    <div className='weather_info_detail'>
                        <p>Weather descriptions: {weather.weather_descriptions}</p> 
                        <p>Observation time: {weather.observation_time}</p>   
                        <p>Temperature: {weather.temperature} celsius degree</p>   
                        <p>Wind speed: {weather.wind_speed} </p>   
                        <p>Humidity: {weather.humidity} </p>   
                        <p>Feels like: {weather.feelslike} celsius degree</p>   
                    </div>                                             
                </div>                 
            </div>
    )
}

export default Weather