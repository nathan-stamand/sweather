import { Current } from "./current";
import { ForecastDay } from "./forecast";
import { Location } from "./location"

export type Weather = {
  location: Location;
  current: Current;
  forecast: {
    forecastDay: ForecastDay[];
  }
}
