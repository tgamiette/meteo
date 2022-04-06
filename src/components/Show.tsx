import react, {useEffect, useState} from "react";
import {VilleInterface} from "../Interface/Ville";
import {OWMKey} from "../Keys/OWMKey";
import useGetWeatherFrom from "../Hook/useGetWeatherFrom";
import React from "react";

interface ShowPropsInterface {
    ville: VilleInterface,
    setVille: React.Dispatch<VilleInterface>,
    isLoading: boolean,
    error: any
}

export default function Show({
                                 ville,
                                 isLoading,
                                 error
                             }: ShowPropsInterface) {


    const [items, setItems] = useState([]);
    if (error) {
        return <div>Erreur : {error}</div>;
    } else if (isLoading) {
        return <div>Chargement...</div>;
    } else {
        console.log(ville)
        return(
        <div className={"container"}>
            <table className={"table"}>
                <tr className={""}>
                    <th scope={"row"}>ville</th>
                    <td> {ville.ville} </td>
                </tr>
                <tr className={""}>
                    <th scope={"row"}>température</th>
                    <td> {ville.temp}</td>
                </tr>
                <tr className={""}>
                    <th scope={"row"}>Humidité</th>
                    <td> {ville.humidity} %</td>
                </tr>
                <tr className={""}>
                    <th scope={"row"}>vitesse moyenne</th>
                    <td> {ville.wind} Km/h</td>
                </tr>
                <tr className={""}>
                    <th scope={"row"}>pression</th>
                    <td>{ville.humidity} HectoPascal</td>
                </tr>
                <tr className={""}>
                    <th scope={"row"}>Ciel</th>
                    <td>{ville.weather}</td>
                </tr>
                <tr className={""}>
                    <th scope={"row"}>Couché du soleil :</th>
                    <td>{ville.sunset}</td>
                </tr>
                <tr className={""}>
                    <th scope={"row"}>Levé du soleil :</th>
                    <td>{ville.sunrise}</td>
                </tr>
            </table>
        </div>
        )
    }


}