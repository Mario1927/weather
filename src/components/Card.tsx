import { useDispatch } from "react-redux";
import { CardInterface } from "../interface/CardInterface";
import { removeCity, unsetCity } from "../actions/actions";
import { HourlyInterface } from "../interface/HourlyInterface";

const pushpin = '📍'; const drop = '💧';

export default function Card({id, name, current, icon, feelsLike, max, min, time, hourly, description}: CardInterface) {

    const dispatch = useDispatch();

    const onClose = (id: string) => {
        dispatch(removeCity(id))
        dispatch(unsetCity(id))
    };

  return (
    <div className="w-[325px] h-[300px] rounded-xl bg-slate-900 flex flex-col items-center text-slate-100 m-4 p-6">
        {/* Location and date */}
        <div className="w-full flex flex-col items-start justify-center">
            <h1 className="text-xl font-bold pl-2">{`${pushpin} ${name}`}</h1>
            <p className="text-xs pl-3">{time}</p>
        </div>
        
        {/* Current temp */}
        <div className="w-full flex items-center justify-between">
            
            {/* Icon and temp */}
            <div className="w-[35%] flex items-center justify-between">
                <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt={`Icon for ${description}`} style={{width: '75px'}}/>
                <p className="text-2xl font-bold">{current.toFixed(0)}°C</p>
            </div>

            {/* Weather description */}
            <div className="w-[65%] flex flex-col items-end justify-center font-thin pr-3">
                <p className="text-xs">{description}</p>
                <p className="text-xs">{`${max.toFixed(0)}°/${min.toFixed(0)}°`}</p>
                <p className="text-xs">Feels like {feelsLike.toFixed(0)}°</p>
            </div>
        </div>

        {/* Hourly forecast */}
        <div className="w-full grid grid-cols-5">
            {hourly.map((hour: HourlyInterface) => {
                return (
                    <div key={`${name} ${hour.time}`} className="flex flex-col items-center justify-center text-sm">
                        <p className="text-slate-400">{hour.time}</p>
                        <img src={`http://openweathermap.org/img/wn/${hour.icon}@2x.png`} alt={`Icon for ${description}`}    style={{width: '25px'}}/>
                        <p className="text-slate-50">{hour.temp.toFixed(0)}°</p>
                        <p className="text-xs text-slate-400 pr-1">{`${drop} ${hour.humidity.toFixed(0)}%`}</p>
                    </div>
                )
            })}
        </div>

        {/* Close button */}
        <button className="w-20 h-7 bg-slate-700 text-slate-100 font-bold my-6 rounded" onClick={() => onClose(id)}>Close</button>
    </div>
  )
}