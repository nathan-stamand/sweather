import { useQuery } from "@apollo/client";
import { useCurrentLocation } from "../../providers/currentLocation";
import { Spinner } from "../../components/spinner";
import { GET_LOCATION } from "../../lib/queries";

export const Location = () => {
  const { currentLocation } = useCurrentLocation();
  const { loading, error, data } = useQuery(GET_LOCATION, {
    variables: {
      search: currentLocation,
    }
  });

  if (loading) return <Spinner />;
  if (error) return null;

  const { locationName, country } = data.current;

  return (
    <>
      <h1>{locationName}</h1>
      <h4>{country}</h4>
    </>
  )
}
