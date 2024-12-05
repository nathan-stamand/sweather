import { useQuery } from "@apollo/client";
import { GET_CURRENT } from "../../lib/queries";
import { useCurrentLocation } from "../../providers/current-location";
import { Spinner } from "../../components/spinner";
import { Card } from "../../components/card";

export const Current = () => {
  const { currentLocation } = useCurrentLocation();
  const { loading, error, data } = useQuery(GET_CURRENT, {
    variables: {
      search: currentLocation,
    },
    pollInterval: 1000 * 60
  });

  if (loading) {
    return <Spinner />
  }

  if (error) {
    console.error('Error in Current: ', error);
    return null;
  }

  const { locationName, country, condition, temperature } = data.current;

  return (
    <div>
      <Card>
        <h1>{locationName}</h1>
        <h2>{country}</h2>
        <Icon src={condition.icon} alt={condition.text} />
        <Temperature deg={temperature} />
        <h3>{condition.text}</h3>
      </Card>
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
