import { HourlyInterface } from "./HourlyInterface";
import { DailyInterface } from "./DailyInterface";

export interface CardInterface { 
    id: string;
    name: string;
    current: number;
    icon: string;
    feelsLike: number;
    max: number;
    min: number;
    description: string;
    time: string;
    hourly: HourlyInterface[];
    daily: DailyInterface[];
}