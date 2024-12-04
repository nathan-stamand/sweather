import { useQuery } from "@apollo/client";
import { useState } from "react";
import { GET_LOCATIONS } from "../../lib/queries";
import { Location } from "../../types/location";

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
      {data.locations.map((loc: Location) => (
        <div key={loc.id}>{loc.name}</div>
      ))}
    </div>
  )
}
