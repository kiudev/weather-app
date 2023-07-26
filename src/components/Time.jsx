import { useEffect, useState } from 'react'
import { apiKey } from '../apiKey'

export const Time = () => {
    const [weather, setWeather] = useState([])

    useEffect(() => {
        const fetchWeather = async () => {
            const url = `http://api.weatherstack.com/current?access_key=${apiKey}&query=New_York`

            try {
                const response = await fetch(url)
                const data = await response.json()
                const weatherData = () => {
                    const { current, location } = data
                    const {
                        cloudover,
                        feelslike,
                        humidity,
                        is_day,
                        precip,
                        pressure,
                        temperature,
                        weather_descriptions,
                        weather_icons,
                        wind_degree,
                        wind_dir,
                        wind_speed,
                    } = current
                    const { country, localtime, name, region } = location

                    return {
                        cloudOver: cloudover,
                        feelsLike: feelslike,
                        humidity,
                        isDay: is_day,
                        precip,
                        pressure,
                        temperature,
                        weatherDescription: weather_descriptions[0],
                        weatherIcons: weather_icons[0],
                        windDegree: wind_degree,
                        windDir: wind_dir,
                        windSpeed: wind_speed,
                        country,
                        localtime,
                        city: name,
                        region

                    }
                }
                setWeather(weatherData)
            } catch (error) {
                console.error(error)
            }
        }
        fetchWeather()
    }, [])

    console.log(weather)

    return (
        <div>
            <div className='min-h-[100px] w-20 bg-transparent blur-lg'></div>
            <h1 className='text-black absolute'>{weather.city}</h1>
        </div>
    )
}
