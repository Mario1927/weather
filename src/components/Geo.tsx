import { useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { addCity, setCity } from "../actions/actions";

export default function Geo() {
    const dispatch = useDispatch();

    useEffect(() => {

      const userCities = window.localStorage.getItem("cities");

      if (userCities && JSON.parse(userCities).length) { return };
      
      const success = async (pos: GeolocationPosition) => {
  
        const lat: string = pos.coords.latitude.toString();
        const lon: string = pos.coords.longitude.toString();
        
        try {
          const geo = await axios.get(`https://api.geoapify.com/v1/geocode/reverse?lat=${lat}&lon=${lon}&apiKey=${process.env.REACT_APP_GEO_API_KEY}`);
          const name = geo.data.features[0].properties.city;
  
          dispatch(addCity(lat, lon, name));
          dispatch(setCity(name));
        } catch (error) {
          console.log(error);   
        }
      }
  
      const error = async (err: GeolocationPositionError) => {
        try {
          const geo = await axios.get(`https://api.ipgeolocation.io/ipgeo?apiKey=${process.env.REACT_APP_IPGEO_API_KEY}&fields=geo`);

          const lat: string = geo.data.latitude;
          const lon: string = geo.data.longitude;
          const name: string = geo.data.city;

          dispatch(addCity(lat, lon, name));
          dispatch(setCity(name));
        } catch (error) {
          console.log(error);
        }
      }
      
      navigator.geolocation.getCurrentPosition(success, error);    
      
    }, [dispatch])

    return(
        <></>
    )
}
