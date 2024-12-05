import { useQuery } from "@apollo/client";
import { Spinner } from "../../components/spinner";
import { GET_WIND } from "../../lib/queries";
import { useCurrentLocation } from "../../providers/currentLocation";

const Wind = () => {
  const { currentLocation } = useCurrentLocation();
  const { loading, error, data } = useQuery(GET_WIND, {
    variables: {
      search: currentLocation,
    }
  });

  if (loading) return <Spinner />;
  if (error) return null;

  const { wind_mph, wind_kph, wind_dir, wind_degree } = data.current;
  return (
    <div>
      <div>compass {wind_degree}</div>
      <h3>{wind_mph} {wind_dir}</h3>
    </div>
  )
}
