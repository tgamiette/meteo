import {OWMKey} from "../Keys/OWMKey";
import {VilleInterface} from "../Interface/Ville";

export default function useGetWeatherFrom(): Function {
    return (ville: string): Promise<any> => {
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${ville}&limit=1&appid=${OWMKey}&lang=fr&units=metric`
        return fetch(url).then(res => res.json())
    }
}