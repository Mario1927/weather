import { CardInterface } from "../interface/CardInterface";
import { HourlyInterface } from "../interface/HourlyInterface";
import axios from "axios";
import { DailyInterface } from "../interface/DailyInterface";

export function addCity(lat: string, lon: string, name: string) {
  return async function (dispatch: any) {
    try {
      const data = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`);

      const city: CardInterface = {
        id: name,
        name: name,
        current: data.data.current.temp,
        feelsLike: data.data.current.feels_like,
        max: data.data.daily[0].temp.max,
        min: data.data.daily[0].temp.min,
        description: data.data.current.weather[0].description,
        time: new Date((data.data.current.dt + data.data.timezone_offset) * 1000).toDateString() + " " + new Date((data.data.current.dt + data.data.timezone_offset) * 1000).toUTCString().split(" ")[4].slice(0, -3),
        icon: data.data.current.weather[0].icon,
        hourly: data.data.hourly.slice(0, 5).map((hour: any) => {

          const date = new Date((hour.dt + data.data.timezone_offset) * 1000);
          const hours = "0" + date.getUTCHours();
          const minutes = "0" + date.getUTCMinutes();
          const formattedTime = hours.substr(-2) + ':' + minutes.substr(-2);

          const hourly: HourlyInterface = {
            time: formattedTime,
            temp: hour.temp,
            humidity: hour.humidity,
            icon: hour.weather[0].icon
          }

          return hourly;
        }),
        daily: data.data.daily.slice(1, 6).map((day: any) => {
          const daily: DailyInterface = {
            day: new Date((day.dt + data.data.timezone_offset) * 1000).toDateString(),
            humidity: day.humidity,
            icon: day.weather[0].icon,
            max: day.temp.max.toFixed(0),
            min: day.temp.min.toFixed(0),
            name: name
          }

          return daily;
        })
      };
      return dispatch({type: "ADD_CITY", payload: city});
    } catch (error) {
      console.log(error);
    }
  }
}

export function removeCity(cityId: string) {
  return {
    type: 'REMOVE_CITY',
    payload: cityId
  }
}