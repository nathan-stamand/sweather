import { Current } from "./current"

export type Hour = Current & {
  snow_cm: number,
  precip_mm: number,
  precip_in: number,
  will_it_rain: 0 | 1,
  chance_of_rain: 0,
  will_it_snow: 0 | 1,
  chance_of_snow: 0,
}
