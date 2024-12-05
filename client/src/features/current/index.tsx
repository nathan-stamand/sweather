import { useQuery } from "@apollo/client";
import { GET_CURRENT } from "../../lib/queries";
import { useCurrentLocation } from "../../providers/current-location";
import { Spinner } from "../../components/spinner";

export const Current = () => {
  const { currentLocation } = useCurrentLocation();
  const { loading, error, data } = useQuery(GET_CURRENT, {
    variables: {
      search: currentLocation,
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
      <Icon src={data.current.condition.icon} alt={data.current.condition.text} />
      <Temperature deg={data.current.temperature} />
      <p><em>{data.current.condition.text}</em></p>
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
