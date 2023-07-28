import { useState } from 'react'
import PropTypes from 'prop-types'
import { apiKey } from '../apiKey'

export const Time = ({ styleText }) => {
    const [weather, setWeather] = useState([])
    const [location, setLocation] = useState('')
    const [isVisible, setVisible] = useState(false)

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
    }

    const currentLocation = event => {
        setLocation(event.target.value)
    }

    const enterLocation = event => {
        event.preventDefault()
        fetchWeather(location)
        setVisible(!isVisible)
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
                <section style={{display: isVisible ? 'block' : 'none'}} className="p-10 -mt-20">
                    <ul style={styleText} className="text-light">
                        <li className="text-[200px]">{`${parseInt(
                            weather.temp
                        )}°C`}</li>
                        <ul className="flex items-center -mt-10">
                            <li>
                                <img
                                    className="w-20"
                                    src={`http://openweathermap.org/img/w/${weather.icon}.png`}
                                    alt={weather.description}
                                    id="icon"
                                />
                            </li>
                            <li className="uppercase text-2xl">
                                {weather.description}
                            </li>
                        </ul>
                    </ul>
                    <ul
                        style={styleText}
                        className="border-t border-current mt-2"
                    >
                        <li className="mt-3 text-xl">{`${weather.name}, ${weather.country}`}</li>
                    </ul>
                </section>
        </section>
    )
}

Time.propTypes = {
    styleText: PropTypes.object,
    styleBackground: PropTypes.object,
}
