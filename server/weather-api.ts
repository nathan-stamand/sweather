import { RESTDataSource } from '@apollo/datasource-rest';
import { Location } from './types/location';
import { Current } from './types/current';

type CurrentAPIResponse = {
  location: Location;
  current: Current;
}

export class WeatherAPI extends RESTDataSource {
  override baseURL = process.env.WEATHER_BASE_URL;

  private getFullUrl(endpoint: string, query: string) {
    const loc = new URL(this.baseURL + endpoint);
    loc.searchParams.set('key', process.env.WEATHER_API_KEY);
    loc.searchParams.set('q', encodeURIComponent(query));
    return loc.href;
  }

  async getLocations(query: string): Promise<Location[]> {
    const endpoint = this.getFullUrl('/search.json', query);
    return this.get<Location[]>(endpoint);
  }

  async getCurrent(query: string): Promise<Current> {
    const endpoint = this.getFullUrl('/current.json', query);
    const response = await this.get<CurrentAPIResponse>(endpoint);

    const { location, current } = response;

    current.locationName = `${location.name}, ${location.region}`;
    current.country = location.country;
    current.wind_mph = current.wind_mph + 'mph';
    current.wind_kph = current.wind_kph + 'kph';

    return current;
  }
}
