import Weather1 from '../assets/weather-1.gif';
import Weather2 from '../assets/weather-2.gif';
import Weather3 from '../assets/weather-3.gif';
import Weather4 from '../assets/weather-4.gif';

export default function NotCities() {
  return (
      <div className="w-full h-full flex flex-col justify-center items-center">
        <div className="w-full h-full flex items-center justify-between my-4 border-2">
            <div className='border-2 flex items-center justify-center w-full md:w-[50%] lg:w-[33%] xl:w-[25%]'>
                <img src={Weather1} alt="weather" className="w-full h-[800px] block m-auto"/>
            </div>
            <div className='hidden md:flex md:w-[50%] lg:w-[33%] xl:w-[25%] border-2'>
                <img src={Weather2} alt="weather" className="w-full h-[800px] block m-auto"/>
            </div>
            <div className='hidden lg:flex lg:w-[33%] xl:[25%] border-2'>
                <img src={Weather3} alt="weather" className="w-full h-[800px] block m-auto"/>
            </div>
            <div className='hidden xl:flex xl:w-[25%] border-2'>
                <img src={Weather4} alt="weather" className="w-full h-[800px] block m-auto"/>
            </div>
        </div>
        <div className='absolute w-[120px] top-[100px] right-[15px] text-slate-100 font-bold border-2 bg-slate-900 border-slate-900 px-1 '>
            <p>Search a city</p>
        </div>
    </div>
  )
}
