import axios from "axios";
import { useDispatch } from "react-redux";
import { addCity } from "../actions/actions";

export default function SearchBar() {

  const dispatch = useDispatch();

  const onSearch = async (e: any) => {
    
    e.preventDefault();

    const geocoding = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${e.target[0].value}&limit=1&appid=${process.env.REACT_APP_WEATHER_API_KEY}`);

    const lat: string = geocoding.data[0].lat;
    const lon: string = geocoding.data[0].lon;
    const name: string = geocoding.data[0].name;

    dispatch(addCity(lat, lon, name));

    e.target[0].value = "";
  }

  return (
    <div className="w-[300px] bg-slate-300 flex">
        <form className="flex-1 flex items-center justify-center" onSubmit={onSearch}>
          <input className="w-full placeholder:text-slate-600 placeholder:text-center px-2 text-slate-900" placeholder='Search city...'></input>
          <button type="submit" className="w-[80px] text-slate-800 text-sm">Submit</button>
        </form>
    </div>
  )
}
