import { RESTDataSource } from '@apollo/datasource-rest';
import { Location } from './types/location';
import { Weather } from './types/weather';


export class WeatherAPI extends RESTDataSource {
  override baseURL = process.env.WEATHER_BASE_URL;

  async getLocations(query: string): Promise<Location[]> {
    const loc = new URL(this.baseURL + '/search.json');
    loc.searchParams.set('key', process.env.WEATHER_API_KEY);
    loc.searchParams.set('q', encodeURIComponent(query));
    return this.get<Location[]>(loc.href);
  }

  async getWeather(query: string): Promise<Weather> {
    const loc = new URL(this.baseURL + '/forecast.json');
    loc.searchParams.set('key', process.env.WEATHER_API_KEY);
    loc.searchParams.set('q', encodeURIComponent(query));
    loc.searchParams.set('days', '3');
    console.log(loc.href)
    return this.get<Weather>(loc.href);
  }
}
