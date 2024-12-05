import { RESTDataSource } from '@apollo/datasource-rest';
import { Location } from './types/location';
import { Weather } from './types/weather';

interface WeatherAPIStructure {
  getLocations: (query: string) => Promise<Location[]>;
  getWeather: (query: string, fahrenheit: boolean, imperial: boolean) => Promise<Weather>;
}

export class WeatherAPI extends RESTDataSource implements WeatherAPIStructure {
  override baseURL = process.env.WEATHER_BASE_URL;

  async getLocations(query: string): Promise<Location[]> {
    const loc = new URL(this.baseURL + '/search.json');
    loc.searchParams.set('key', process.env.WEATHER_API_KEY);
    loc.searchParams.set('q', encodeURIComponent(query));
    return this.get<Location[]>(loc.href);
  }

  async getWeather(query: string) {
    const loc = new URL(this.baseURL + '/forecast.json');
    loc.searchParams.set('key', process.env.WEATHER_API_KEY);
    loc.searchParams.set('q', encodeURIComponent(query));
    loc.searchParams.set('days', '3');
    const response = await this.get<Weather>(loc.href);
    const { current } = response;
    current.temperature = current.temp_f;
    console.log(current)

    response.current = current;
    return response;
  }
}
