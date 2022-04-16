import { useSelector } from "react-redux"
import { CardInterface } from "../interface/CardInterface";
import Card from "./Card";

export default function Cards() {

  const cards: Array<CardInterface> = useSelector((state: any) => state.cities);

  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div className="flex flex-wrap justify-center">
          {
              cards.length ?
              cards.map((card: CardInterface) => {
                  return <Card key={card.id} id={card.id} name={card.name} current={card.current} icon={card.icon} feelsLike={card.feelsLike} max={card.max} min={card.min} description={card.description} time={card.time} hourly={card.hourly} daily={card.daily} />
              }) :
              <h2>Add some cities</h2>        
          }
      </div>
    </div>
  )
}
