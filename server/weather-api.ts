import { RESTDataSource } from '@apollo/datasource-rest';


export class WeatherAPI extends RESTDataSource {
  override baseURL = process.env.WEATHER_BASE_URL;

  async getLocations(query: string): Promise<Location[]> {
    const loc = new URL(this.baseURL + '/search.json');
    loc.searchParams.set('key', process.env.WEATHER_API_KEY);
    loc.searchParams.set('q', encodeURIComponent(query));
    return this.get<Location[]>(loc.href);
  }
}
