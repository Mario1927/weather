import Weather1 from '../assets/weather-1.gif';
import Weather2 from '../assets/weather-2.gif';
import Weather3 from '../assets/weather-3.gif';
import Weather4 from '../assets/weather-4.gif';

export default function NotCities() {
  return (
    <div className="flex w-full h-full items-center justify-center my-4">
        <div className='w-[400px] border-2'>
            <img src={Weather1} alt="weather" className="w-[400px] h-[800px]"/>
        </div>
        <div className='hidden w-[400px] md:flex border-2'>
            <img src={Weather2} alt="weather" className="w-[400px] h-[800px]"/>
        </div>
        <div className='hidden w-[400px] lg:flex border-2'>
            <img src={Weather3} alt="weather" className="w-[400px] h-[800px]"/>
        </div>
        <div className='hidden w-[400px] xl:flex border-2'>
            <img src={Weather4} alt="weather" className="w-[400px] h-[800px]"/>
        </div>
        <div className='relative w-[120px] bottom-[-370px] right-[135px] text-slate-100 font-bold border-2 bg-slate-900 border-slate-900 px-1 '>
            <p>Search a city</p>
        </div>
    </div>
  )
}
