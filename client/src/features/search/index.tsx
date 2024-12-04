import { useQuery } from "@apollo/client";
import { useState } from "react";
import { GET_LOCATIONS, GET_WEATHER } from "../../lib/queries";
import { Location } from "../../types/location";
import { useCurrentLocation } from "../../providers/current-location";

export const Search = () => {
  const [search, setSearch] = useState('');

  return (
    <div>
      <input
        name='search'
        id='search'
        onChange={e => setSearch(e.target.value)}
        value={search}
        placeholder="Find a location"
      />
      {search.length > 3 && <Options search={search} />}
    </div>
  );
}

const Options = ({ search }: { search: string }) => {
  const { loading, error, data } = useQuery(GET_LOCATIONS, {
    variables: { search: search }
  });

  if (loading) {
    return 'Loading...';
  }

  if (error) {
    return 'Error! ' + error.message
  }

  return (
    <div>
      {data.locations.map((location: Location) => (
        <Option key={location.id} location={location} />
      ))}
    </div>
  )
}

const Option = ({ location }: { location: Location }) => {
  const { setCurrentLocation } = useCurrentLocation();
  const { url, name, region, country } = location;

  return (
    <button type='button' onClick={() => setCurrentLocation(url)}>{name}, {region} | {country}</button>
  )
}
