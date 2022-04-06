import react, {Component, useState} from "react";
import {VilleInterface} from "../Interface/Ville";
import useGetWeatherFrom from "../Hook/useGetWeatherFrom";
import React from "react";

interface ShowPropsInterface {
    setIsLoading: React.Dispatch<any>,
    setVille: React.Dispatch<VilleInterface>,
    setError: React.Dispatch<any>,
}

export default function Form({setVille, setIsLoading, setError}: ShowPropsInterface) {

    const getWeather = useGetWeatherFrom();

    const handleSubmit = (e: any) => {
        e.preventDefault();
        // @ts-ignore
        const searchVille = document.getElementById('Title')?.value
        setError(false)
        setIsLoading(true)
        getWeather(searchVille)
            .then((data: any) => {
                setIsLoading(false)
                console.log(data)
                let sunrise = new Date(data.sys.sunrise * 1000)
                let sunset = new Date(data.sys.sunset * 1000)
                 sunset = sunset.getHours() + ':' + sunset.getMinutes() + ':' + sunset.getSeconds()
                 sunrise = sunrise.getHours() + ':' + sunrise.getMinutes() + ':' + sunrise.getSeconds()

                // console.log(sunsetHours)
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
            })
            .catch((err: { message: string; }) => {
                setError(err.message)
                setIsLoading(false)
                console.log("erreur de requête")
            })
    }

    return (
        <form className={"form-control"} onSubmit={handleSubmit}>
            <div className="form-group">
                <div>
                    <label htmlFor="formGroupExampleInput">Rechercher Une ville</label>
                </div>

                <input type="text" className="form-control" id="Title" placeholder="Ville" value={}/>
            </div>
            <button className="btn btn-primary" type="submit">Rechercher</button>
        </form>
    );

}
