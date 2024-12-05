import { useQuery } from "@apollo/client";
import { GET_CURRENT } from "../lib/queries";
import { useCurrentLocation } from "../providers/currentLocation";
import { useSettings } from "../providers/settings";

export const useCurrentWeather = () => {
  const { currentLocation } = useCurrentLocation();
  const { settings } = useSettings();
  const { loading, error, data } = useQuery(GET_CURRENT, {
    variables: {
      search: currentLocation,
      fahrenheit: settings.Fahrenheit.value,
      imperial: settings.Imperial.value,
    },
    pollInterval: 1000 * 60
  });

  return {
    loading,
    error,
    data
  }
}
