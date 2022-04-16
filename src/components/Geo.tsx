import { useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { addCity } from "../actions/actions";

export default function Geo() {
    const dispatch = useDispatch();

    useEffect(() => {

        console.log('Geo');
  
      const success = async (pos: GeolocationPosition) => {
  
        const lat: string = pos.coords.latitude.toString();
        const lon: string = pos.coords.longitude.toString();
  
        const geo = await axios.get(`https://api.geoapify.com/v1/geocode/reverse?lat=${lat}&lon=${lon}&apiKey=${process.env.REACT_APP_GEO_API_KEY}`);
        const name = geo.data.features[0].properties.city;
  
        dispatch(addCity(lat, lon, name));
      }
  
      const error = (err: GeolocationPositionError) => {
        console.log(err);
      }
      
      navigator.geolocation.getCurrentPosition(success, error);    
      
    }, [dispatch])

    return(
        <></>
    )
}
