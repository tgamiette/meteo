import {SetStateAction, useEffect, useState} from 'react'
import logo from './logo.svg'
import './App.css';
import Form from './components/Form';
import Show from './components/Show';
import {VilleInterface} from "./Interface/Ville";
import useGetWeatherFrom from "./Hook/useGetWeatherFrom";
import "bootstrap/dist/css/bootstrap.css";

function App() {
    const [ville, setVille] = useState<VilleInterface>({
        pressure: 0,
        sunrise: 0,
        sunset: 0,
        temp_max: 0,
        temp_min: 0,
        visibility: 0,
        weather: "",
        humidity: 0, wind: 0, temp: 0, ville: "paris"
    })
    const getWeather = useGetWeatherFrom();

    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);


    useEffect(() => {
        console.log('effect')
        // console.log(getWeather)
        getWeather(ville.ville)
            .then((data: any) => {

                let sunrise: Date | string = new Date(data.sys.sunrise * 1000)
                let sunset: Date | string = new Date(data.sys.sunset * 1000)
                sunset = sunset.getHours() + ':' + sunset.getMinutes() + ':' + sunset.getSeconds()
                sunrise = sunrise.getHours() + ':' + sunrise.getMinutes() + ':' + sunrise.getSeconds()
                console.log(data)
                setVille({
                    pressure: data.main.pressure,
                    sunrise: sunrise,
                    sunset: sunset,
                    temp_max: data.main.temp_max,
                    temp_min: data.main.temp_min,
                    visibility: data.visibility,
                    wind: data.wind.speed,
                    weather: data.weather[0].description,
                    humidity: data.main.humidity,
                    temp: data.main.temp,
                    ville: data.name
                })
                setIsLoading(false)
            })
            .catch((err: { message: SetStateAction<any> }) => {
                setError(err.message)
                console.log("tets")
                setIsLoading(false)
            })
    }, [])

    return (
        <div className="App">
            <Form setVille={setVille} setIsLoading={setIsLoading} setError={setError}/>
            <Show ville={ville} setVille={setVille} isLoading={isLoading} error={error}/>
        </div>
    )
}

export default App