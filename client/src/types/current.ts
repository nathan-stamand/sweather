import { Condition } from "./condition";

type CustomProperties = {
  locationName: string;
  country: string;
}

export type Current = Partial<CustomProperties> & {
  last_updated_epoch: number;
  last_updated: string;
  temp_c: number;
  temp_f: number;
  is_day: 0 | 1;
  condition: Condition;
  wind_mph: number | string;
  wind_kph: number | string;
  wind_degree: number
  wind_dir: string;
  pressure_mb: string;
  pressure_in: string;
  precip_mm: number;
  precip_in: number;
  humidity: number;
  cloud: number;
  feelslike_c: number;
  feelslike_f: number;
  windchill_c: number;
  windchill_f: number;
  heatindex_c: number;
  heatindex_f: number;
  dewpoint_c: number;
  dewpoint_f: number;
  vis_km: number;
  vis_miles: number;
  uv: number;
  gust_mph: number;
  gust_kph: number;
}
