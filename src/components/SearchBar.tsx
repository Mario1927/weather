import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addCity, setCity } from "../actions/actions";
import Swal from "sweetalert2";

export default function SearchBar() {

  const dispatch = useDispatch();
  const listOfCities: Array<string> = useSelector((state: any) => state.listOfCities);

  const onSearch = async (e: any) => {
    
    e.preventDefault();

    try {
      const geocoding = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${e.target[0].value}&limit=1&appid=${process.env.REACT_APP_WEATHER_API_KEY}`);

      const lat: string = geocoding.data[0].lat;
      const lon: string = geocoding.data[0].lon;
      const name: string = geocoding.data[0].name;

      if (listOfCities.includes(name)) {
        Swal.fire({
          title: "City already added",
          text: "You can't add the same city twice",
          icon: "warning",
          confirmButtonText: "Ok",
          background: 'rgb(15 23 42)',
          color: 'rgb(241 245 249)'
        });
        return;
      ;}

      dispatch(addCity(lat, lon, name));
      dispatch(setCity(name));
    } catch (error) {
      console.log(error);
    }

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
