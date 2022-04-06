export interface VilleInterface {
    ville: string | null | undefined;
    temp: number;
    humidity: number;
    visibility: number
    weather: string
    temp_min: number
    temp_max: number
    pressure: number
    sunset: Date | string
    sunrise: Date | string
    wind: number
}