import { Condition } from "./condition"
import { Hour } from "./hour"

export type Forcast = {
  forecastday: ForecastDay[];
}

export type ForecastDay = {
  date: string;
  date_epoch: number;
  day: {
    maxtemp_c: number;
    maxtemp_f: number;
    mintemp_c: number;
    mintemp_f: number;
    avgtemp_c: number;
    avgtemp_f: number;
    maxwind_mph: number;
    maxwind_kph: number;
    totalprecip_mm: number;
    totalprecip_in: number;
    totalsnow_cm: number;
    avgvis_km: number;
    avgvis_miles: number;
    avghumidity: number;
    daily_will_it_rain: 0 | 1;
    daily_chance_of_rain: 0 | 1;
    daily_will_it_snow: 0 | 1;
    daily_chance_of_snow: 0 | 1;
    condition: Condition;
    uv: number;
    hour: Hour[];
  }
}
