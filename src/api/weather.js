import axios from "axios";

const instance = axios.create({
  baseURL: "https://community-open-weather-map.p.rapidapi.com",
  headers: {
    "x-rapidapi-host": process.env.REACT_APP_X_RapidAPI_Host,
    "x-rapidapi-key": process.env.REACT_APP_X_RapidAPI_Key,
  },
});
export default instance;
