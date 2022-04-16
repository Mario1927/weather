import { useSelector } from 'react-redux'
import { DailyInterface } from '../interface/DailyInterface';

const top = '🔼'; const min = '🔽'; const drop = '💧';

export default function CardDaily() {

  const daily: Array<DailyInterface> = useSelector((state: any) => state.cities.length ? state.cities[state.cities.length - 1].daily : []);	

  return (
      daily.length ?
      <div className='w-full flex flex-col justify-center items-center h-[400px] my-6'>
        <div className='bg-slate-900 w-[95%] md:w-[60%] rounded-xl text-slate-100 text-center py-2'>
          <div className='my-1'>
            <h1 className="text-4xl font-extrabold">{daily[0]?.name}</h1>
            <p>Six days forecast</p>
          </div>
          
          {daily.map((day: DailyInterface) => {
            return(
              <div key={day.day} className="grid grid-cols-5 gap-2 py-2">
                <p>{day.day.split(' ')[0]}</p>
                <p>{`${drop} ${day.humidity}%`}</p>
                <div className='flex items-start justify-center w-full h-[50px]'>
                  <img src={`http://openweathermap.org/img/wn/${day.icon}@2x.png`} alt={`Icon for wheater`} style={{width: '30px'}}/>
                </div>
                <p>{`${top} ${day.max}°`}</p>
                <p>{`${min} ${day.min}°`}</p>
              </div>
            )
          })} 
        </div>
      </div> : <></>    
  )
}
