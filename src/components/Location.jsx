import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { apiKey } from '../apiKey'
import { Weather } from './Weather'
import { Slide, ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const Location = ({ styleText }) => {
    const [weather, setWeather] = useState([])
    const [location, setLocation] = useState('Barcelona')
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(false)

    const fetchWeather = async query => {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=${apiKey}`

        setIsLoading(true)
        setError(false)
        try {
            const response = await fetch(url)
            if (!response.ok) throw new Error('Error fetching weather')
            const data = await response.json()
            const weatherData = () => {
                const {
                    main: { feels_like, humidity, temp, temp_max, temp_min },
                    sys: { country },
                    weather,
                    wind: { deg, gust, speed },
                    name,
                    timezone,
                } = data

                const { icon } = weather[0]

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
            setError(error)
            console.error(error)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchWeather(location)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const currentLocation = event => {
        setLocation(event.target.value)
    }

    const enterLocation = event => {
        event.preventDefault()
        fetchWeather(location)
        
        if (!isLoading && error) {
            toast.error(`"${location}" could not be found 😔`, {
                position: toast.POSITION.TOP_LEFT,
                hideProgressBar: false,
                transition: Slide,
                autoClose: 2000,
            })
        } else {
            toast.success(`"${location}" completed successfully 😀`, {
                position: toast.POSITION.TOP_LEFT,
                hideProgressBar: false,
                transition: Slide,
                autoClose: 2000,
            })
        }
    }

    return (
        <section>
            <ToastContainer />
            <form className="mx-96" onSubmit={enterLocation}>
                <input
                    style={styleText}
                    className="bg-transparent border-b border-current focus:outline-none text-center w-full text-xl p-2"
                    type="text"
                    value={location}
                    onChange={currentLocation}
                    placeholder="Enter location"
                />
            </form>
            <section className="rounded-[50px] overflow-hidden mt-10 drop-shadow-bg p-10 mx-20">
                <Weather
                    weather={weather}
                    styleText={styleText}
                    isLoading={isLoading}
                    setIsLoading={setIsLoading}
                />
            </section>
        </section>
    )
}

Location.propTypes = {
    styleText: PropTypes.object,
    styleBackground: PropTypes.object,
}
