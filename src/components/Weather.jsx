import PropTypes from 'prop-types'
import { Load } from './Load'
import { Card, CardContent, Typography } from '@mui/material'

export const Weather = ({ isVisible, weather, isLoading }) => {
    if (isLoading) {
        return <Load />
    }

    return (
        <section style={{ display: isVisible ? 'block' : 'none' }}>
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
            <section className="flex justify-evenly">
                <Card
                    sx={{ minWidth: 200, textAlign: 'center', marginTop: 10 }}
                >
                    <CardContent>
                        <Typography variant="h5">Feels Like</Typography>
                        <Typography sx={{ fontSize: 50 }} color="text.primary">
                            {`${parseInt(weather.feelsLike)}°C`}
                        </Typography>
                    </CardContent>
                </Card>
                <Card
                    sx={{ minWidth: 200, textAlign: 'center', marginTop: 10 }}
                >
                    <CardContent>
                        <Typography variant="h5">Humidity</Typography>
                        <Typography sx={{ fontSize: 50 }} color="text.primary">
                            {`${weather.humidity}%`}
                        </Typography>
                    </CardContent>
                </Card>
                <Card
                    sx={{ minWidth: 200, textAlign: 'center', marginTop: 10 }}
                >
                    <CardContent>
                        <Typography variant="h5">Minimum</Typography>
                        <Typography sx={{ fontSize: 50 }} color="text.primary">
                            {`${parseInt(weather.tempMin)}°C`}
                        </Typography>
                    </CardContent>
                </Card>
                <Card
                    sx={{ minWidth: 200, textAlign: 'center', marginTop: 10 }}
                >
                    <CardContent>
                        <Typography variant="h5">Maximum</Typography>
                        <Typography sx={{ fontSize: 50 }} color="text.primary">
                            {`${parseInt(weather.tempMax)}°C`}
                        </Typography>
                    </CardContent>
                </Card>
            </section>
        </section>
    )
}

Weather.propTypes = {
    isVisible: PropTypes.bool,
    weather: PropTypes.array,
    styleText: PropTypes.object,
    isLoading: PropTypes.bool,
}
