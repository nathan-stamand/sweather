import { useQuery } from "@apollo/client";
import { Spinner } from "../../components/spinner";
import { GET_CONDITION } from "../../lib/queries";
import { useCurrentLocation } from "../../providers/currentLocation";

export const Icon = () => {
  const { currentLocation } = useCurrentLocation();
  const { loading, error, data } = useQuery(GET_CONDITION, {
    variables: {
      search: currentLocation,
    }
  });

  if (loading) return <Spinner />
  if (error) return null;

  const { condition } = data.current;

  return (
    <img src={`https:${condition.icon}`} alt={condition.text} />
  )
}
