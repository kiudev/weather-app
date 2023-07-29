import PropTypes from 'prop-types'
import { Load } from './Load'

export const Weather = ({ isVisible, weather, isLoading }) => {
    if (isLoading) {
        return <Load />
    }

    return (
        <section
            style={{ display: isVisible ? 'block' : 'none' }}
            className="p-10 backdrop-blur-3xl backdrop-brightness-50 drop-shadow-bg"
        >
            <ul className="text-center text-light">
                <li className="text-5xl">{`${weather.name}, ${weather.country}`}</li>
            </ul>
            <ul className="text-light flex flex-wrap justify-between items-center">
                <li className="text-[150px]">{`${parseInt(
                    weather.temp
                )}°C`}</li>
                <ul className="-mt-16">
                    <li className="">
                        <img
                            className="w-60"
                            src={`https://openweathermap.org/img/wn/${weather.icon}@4x.png`}
                            alt={weather.description}
                            id="icon"
                        />
                    </li>
                    <li className="text-center text-4xl -mt-10">
                        {weather.description}
                    </li>
                </ul>
            </ul>
        </section>
    )
}

Weather.propTypes = {
    isVisible: PropTypes.bool,
    weather: PropTypes.array,
    styleText: PropTypes.object,
    isLoading: PropTypes.bool,
}
