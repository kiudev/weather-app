import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { apiKey } from '../apiKey'
import { Weather } from './Weather'

export const Time = ({ styleText }) => {
    const [weather, setWeather] = useState([])
    const [location, setLocation] = useState('Barcelona')
    const [isVisible, setVisible] = useState(true)
    const [isLoading, setIsLoading] = useState(true)
    
    const fetchWeather = async query => {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=${apiKey}`

        try {
            const response = await fetch(url)
            const data = await response.json()
            const weatherData = () => {
                const { main, sys, weather, wind, name, timezone } = data
                const { feels_like, humidity, temp, temp_max, temp_min } = main
                const { country } = sys
                const { icon } = weather[0]
                const { deg, gust, speed } = wind

                return {
                    name,
                    feelsLike: feels_like,
                    humidity,
                    temp,
                    tempMax: temp_max,
                    tempMin: temp_min,
                    country,
                    description: weather[0].main,
                    icon,
                    deg,
                    gust,
                    speed,
                    timezone,
                }
            }
            setWeather(weatherData)
        } catch (error) {
            console.error(error)
        }
        setIsLoading(false)
    }

    useEffect(() => {
        fetchWeather(location)
    }, [])

    const currentLocation = event => {
        setLocation(event.target.value)
    }

    const enterLocation = event => {
        event.preventDefault()
        fetchWeather(location)
        setVisible(isVisible)
    }
    

    console.log(weather)

    return (
        <section className="mt-20 mx-96 shadow-2xl rounded-2xl">
                <form className='p-10' onSubmit={enterLocation}>
                    <input
                        style={styleText}
                        className="bg-transparent border border-current text-center w-full text-xl p-2"
                        type="text"
                        value={location}
                        onChange={currentLocation}
                        placeholder="Enter location"
                    />
                </form>
                <Weather isVisible={isVisible} weather={weather} styleText={styleText} isLoading={isLoading} setIsLoading={setIsLoading} />
        </section>
    )
}

Time.propTypes = {
    styleText: PropTypes.object,
    styleBackground: PropTypes.object,
}
