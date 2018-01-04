// import axios from 'axios';

// const API_KEY = 'a820cbdda14d5b20';
// const ROOT_URL = `http://openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
// //http://samples.openweathermap.org/data/2.5/forecast?q=London,us&appid=b6907d289e10d714a6e88b30761fae22
//
// export const FETCH_WEATHER = 'FETCH_WEATHER'
//
// export function fetchWeather(city) {
//   const url = `${ROOT_URL}&q=${city},us`;
//
//   // request get promise which is passed into the actions payload.
//   const request = axios.get(url);
//
//   console.log('Request:', request);
//
//   return {
//     type: FETCH_WEATHER,
//     payload: request
//   }
// }

import axios from "axios";

const API_KEY = "6a78596d062df78380eff5944c4e5567";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = "FETCH_WEATHER";

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
