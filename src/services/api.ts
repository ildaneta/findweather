import axios from "axios";

export const api = axios.create({
  baseURL: 'http://api.weatherapi.com/v1/current.json'
})

