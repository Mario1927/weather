import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addCity, setCity } from "../actions/actions";
import Swal from "sweetalert2";
import { useEffect } from "react";

export default function SearchBar() {

  const dispatch = useDispatch();
  const listOfCities: Array<string> = useSelector((state: any) => state.listOfCities);

  useEffect(() => {
    const userCities = window.localStorage.getItem("cities");
    if (userCities) {
      const cities = JSON.parse(userCities);
      cities.forEach((city: string) => {
        onSearch(city);
      });
    }
    // eslint-disable-next-line
  }, [])

  const onSearch = async (search: string) => {
    
    try {
      const geocoding = await axios.get(`https://api.openweathermap.org/geo/1.0/direct?q=${search}&limit=1&appid=${process.env.REACT_APP_WEATHER_API_KEY}`);

      const lat: string = geocoding.data[0]?.lat;
      const lon: string = geocoding.data[0]?.lon;
      const name: string = geocoding.data[0]?.name;

      if(!lat || !lon || !name) {
        Swal.fire({
          title: 'Error',
          text: 'City not found',
          icon: 'error',
          confirmButtonText: 'Ok',
          background: 'rgb(15, 23, 42)',
          color: 'rgb(241, 245, 249)'
        });
        return;
      };

      if (listOfCities.includes(name)) {
        Swal.fire({
          title: "City already added",
          text: "You can't add the same city twice",
          icon: "warning",
          confirmButtonText: "Ok",
          background: 'rgb(15, 23, 42)',
          color: 'rgb(241, 245, 249)'
        });
        return;
      ;}

      dispatch(addCity(lat, lon, name));
      dispatch(setCity(name));

      const cities = window.localStorage.getItem("cities");
      if (cities) {
        const citiesArray: Array<string> = JSON.parse(cities);
        !citiesArray.includes(name) && citiesArray.push(name);
        window.localStorage.setItem("cities", JSON.stringify(citiesArray));
      } else {
        const citiesArray = [name];
        window.localStorage.setItem("cities", JSON.stringify(citiesArray));
      }
    } catch (error) {
      console.log(error);
    }
  }

  const handleSubmit = (e: any) => {
    e.preventDefault();
    onSearch(e.target[0].value);
    e.target[0].value = "";
  }

  return (
    <div className="w-[300px] bg-slate-300 flex">
        <form className="flex-1 flex items-center justify-center" onSubmit={handleSubmit}>
          <input className="w-full placeholder:text-slate-600 placeholder:text-center px-2 text-slate-900" placeholder='Search city...' autoFocus={true}></input>
          <button type="submit" className="w-[80px] text-slate-800 text-sm">Submit</button>
        </form>
    </div>
  )
}
