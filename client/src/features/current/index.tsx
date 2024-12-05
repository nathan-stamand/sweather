import { useQuery } from "@apollo/client";
import { GET_WEATHER } from "../../lib/queries";
import { useCurrentLocation } from "../../providers/current-location";
import { Spinner } from "../../components/spinner";

export const Current = () => {
  const { currentLocation } = useCurrentLocation();
  const { loading, error, data } = useQuery(GET_WEATHER, {
    variables: {
      search: currentLocation,
      fahrenheit: true,
      imperial: true,
    },
  });

  if (loading) {
    return <Spinner />
  }

  if (error) {
    console.error('Error in Current: ', error);
    return null;
  }

  return (
    <div>
      <h1>{currentLocation}</h1>
      <Icon src={data.weather.current.condition.icon} alt={data.weather.current.condition.text} />
      <Temperature deg={data.weather.current.temperature} />
      {data.weather.current.condition.text}
    </div>
  )
}

const Temperature = ({ deg }: { deg: number }) => {
  return (
    <h1>{deg}<sup>&#176;F</sup></h1>
  )
}

const Icon = ({ src, alt }: { src: string, alt: string }) => {
  return (
    <img src={`https:${src}`} alt={alt} />
  )
}
