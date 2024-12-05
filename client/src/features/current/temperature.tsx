import { useQuery } from "@apollo/client";
import { Spinner } from "../../components/spinner";
import { useSettings } from "../../providers/settings";
import { useCurrentLocation } from "../../providers/currentLocation";
import { GET_TEMP } from "../../lib/queries";

export const Temperature = () => {
  const { settings } = useSettings();
  const { currentLocation } = useCurrentLocation();
  const { loading, error, data } = useQuery(GET_TEMP, {
    variables: {
      search: currentLocation,
    }
  })

  if (loading) return <Spinner />
  if (error) return null;

  const useFahrenheit = settings.Fahrenheit.value;
  const unit = useFahrenheit ? 'F' : 'C';
  const temp = useFahrenheit ? data.current.temp_f : data.current.temp_c;

  return (
    <h1>{temp}<sup>&#176;{unit}</sup></h1>
  )
}
