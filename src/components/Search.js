import axios from "axios"
import { useState, useEffect } from "react"
import Weather from "./Weather"

const Search = () =>{
 // hook
    const [countries, setCountries] = useState([])
    const [filterCountries, setFilterCountries] = useState([])
    const [selectedCountry, setSelectedCountry] = useState('')

// fetch initial data from API https://restcountries.eu by axios and useEffect    
    const fetchData = () =>{
        const url = 'https://restcountries.eu/rest/v2/all'
        axios
            .get(url)
            .then(res =>setCountries(res.data))
    }
    useEffect(fetchData,[])

    const searchCountries = (e) =>{
        setSelectedCountry('') // reset data for weather
        let  query = e.target.value.toLowerCase()
        setFilterCountries(countries.filter(country => country.name.toLowerCase().includes(query)))  
    }

    const Countries = ({data}) =>{    
        
        const showDeltail = (e) =>{
            const result = data.filter(item => item.alpha2Code === e.target.value)
            setSelectedCountry(result)
        }
                
        if(data.length === 1 ){
            return(
                <Country country={data}/>
            )
        }else if (data.length >10){
            return (
               <p>
                    Too many results, please provide more specified query
               </p>         
            )
        } else {
            return(
                <div className='results_display'>
                <table>
                    <tbody>
                    {data.map(item => {
                        return(
                            <tr key={item.alpha2Code}>
                                <td>
                                    {item.name}                                
                                </td>
                                <td>
                                    <button 
                                        onClick={showDeltail} 
                                        value={item.alpha2Code}> Show detail
                                    </button>
                                </td>
                            </tr>)
                        })}
                    </tbody>
                </table>
                {selectedCountry.length !==0 ? <Country country={selectedCountry}/>:'' }
            </div>
            )
        }
    }
    
    const Country = ({country}) =>{
        const [weather, setWeather] = useState([])        
        // fetch weather data from API http://api.weatherstack.com/ by axios and useEffect 
        useEffect(() =>{
            const api_key = process.env.REACT_APP_API_KEY 
            const city = country[0].capital      
            const urlWeather = `http://api.weatherstack.com/current?access_key=${api_key}&query=${city}`
            axios
                .get(urlWeather)
                .then(res => setWeather(res.data.current))
                // eslint-disable-next-line react-hooks/exhaustive-deps
        },[])
    
        return(
            <div className='country'>
                <h3>{country[0].name}</h3>
                <div className='country_info'>
                    <img src={country[0].flag} alt='Flag of country'/>
                    <div className='country_info_detail'>
                        <p>Capital city: {country[0].capital}</p>
                        <p>Population: {country[0].population}</p>
                        <p>Region: {country[0].region}</p>
                        <p>Timezones: {country[0].timezones[0]}</p>
                        <p>Currencies:</p>
                        <ul>
                            {country[0].currencies.map(currency =>
                                <li key={currency.name}>{currency.name}</li>)}
                        </ul>
                        <p>Langagues:</p>
                        <ul>
                            {country[0].languages.map(language =>
                                <li key={language.name}>{language.name}</li>
                                )}
                        </ul>
                    </div>
                </div>
                {weather.length === 0 ? '' : <Weather city={country[0].capital} weather={weather}/> }
            </div>
        )
    }

    return(
        <div className='search'>
            <div className = 'search_action'>
                <input className = 'search_input'
                    type = 'text'
                    onChange={searchCountries}
                    placeholder = '... type a country name'
                />
                <p className='search_message'></p>
            </div>
            <div className='search_results'>
                <Countries data={filterCountries}/>
            </div>
        </div>
    )
}

export default Search