import PropTypes from 'prop-types'
import { Load } from './Load'

export const Weather = ({ isVisible, weather, styleText, isLoading }) => {
    if (isLoading) {
        return <Load />
    }

    return (
        <section style={{display: isVisible ? 'block' : isLoading ? 'none' : ''}} className="p-10 -mt-20">
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

    )
}

Weather.propTypes = {
    isVisible: PropTypes.bool,
    weather: PropTypes.array,
    styleText: PropTypes.object,
    isLoading: PropTypes.bool,
}