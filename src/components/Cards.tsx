import { useSelector } from "react-redux"
import { CardInterface } from "../interface/CardInterface";
import Card from "./Card";
import GIF from "../assets/weather.gif";
import NotCities from "./NotCities";

export default function Cards() {

  const cards: Array<CardInterface> = useSelector((state: any) => state.cities);

  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div className="flex flex-wrap justify-center">
          {
              cards.length ?
              cards.map((card: CardInterface) => {
                  return (
                    <Card 
                      key={card.id} 
                      id={card.id} 
                      name={card.name} 
                      current={card.current} 
                      icon={card.icon} 
                      feelsLike={card.feelsLike} 
                      max={card.max} min={card.min} 
                      description={card.description} 
                      time={card.time} 
                      hourly={card.hourly} 
                      daily={card.daily} 
                    /> 
                  )
              }) : <></>     
          }
      </div>
      {
        !cards.length &&
        <NotCities />               
        // <div className="w-[95%] h-full flex justify-between items-center m-2 p-2 bg-slate-900 rounded-xl">
        //   <div className="w-[20%]">
        //     <h1 className="text-2xl font-extrabold text-slate-100 text-center">Search for a city</h1>
        //   </div>
        //   <div className="w-[80%]">
        //     <img className="rounded-lg border-[2px] border-slate-100 h-full w-[95%]" src={GIF} alt="Funny GIF"></img>
        //   </div>
        // </div>
      }
    </div>
  )
}
