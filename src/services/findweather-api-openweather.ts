import { api } from "./api-openweather";

const { API_KEY_OPENWEATHER } = process.env

export const FindWeatherOpenWeatherAPI = {
  getForecast: (city: string, countryCode?: string) => {
    return api.get(`forecast?appid=${API_KEY_OPENWEATHER}&q=${city},${countryCode}&units=metric&lang=pt`)
  }
}