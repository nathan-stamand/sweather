import { useQuery } from "@apollo/client";
import { Spinner } from "../../components/spinner";
import { GET_WIND } from "../../lib/queries";
import { useCurrentLocation } from "../../providers/currentLocation";
import { useSettings } from "../../providers/settings";

export const Wind = () => {
  const { settings } = useSettings();
  const { currentLocation } = useCurrentLocation();
  const { loading, error, data } = useQuery(GET_WIND, {
    variables: {
      search: currentLocation,
    }
  });

  if (loading) return <Spinner />;
  if (error) return null;

  const { wind_mph, wind_kph, wind_dir, wind_degree } = data.current;

  const useImperial = settings.Imperial.value;
  const speed = useImperial ? wind_mph : wind_kph;

  return (
    <div>
      <div>compass {wind_degree}</div>
      <h3>{speed} {wind_dir}</h3>
    </div>
  )
}
