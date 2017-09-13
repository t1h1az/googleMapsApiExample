import axios from 'axios';

const API_KEY = 'ff84f45749b2a4665cf37312097a278b';
const API_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
const countryCode = 'us';
// extracted because we want to keep our action types consistent between
// action creators and reducerss
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${API_URL}&q=${city},us`;
  axios.get(url)
    .then((res) => res);

  const req = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: req
  };
}
