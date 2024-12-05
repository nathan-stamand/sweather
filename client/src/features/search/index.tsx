import './styles.css';
import { useQuery } from "@apollo/client";
import { createContext, Dispatch, SetStateAction, useContext, useEffect, useState } from "react";
import { GET_LOCATIONS } from "../../lib/queries";
import { Location } from "../../types/location";
import { useCurrentLocation } from "../../providers/current-location";
import { Spinner } from "../../components/spinner";
import { useDebounce } from '../../hooks/useDebounce';

type SearchContext = {
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
}
const SearchString = createContext<SearchContext>({ search: '', setSearch: () => { } });

export const Search = () => {
  const [search, setSearch] = useState('');
  const [_, setDebouncedSearch] = useState('');

  const debouncedSearchValue = useDebounce(search);

  useEffect(() => {
    setDebouncedSearch(search);
  }, [debouncedSearchValue]);

  return (
    <div className='search-box'>
      <input
        name='search'
        id='search'
        onChange={e => setSearch(e.target.value)}
        value={search}
        placeholder="Find a location"
        autoComplete='off'
      />
      <SearchString.Provider value={{ search, setSearch }}>
        {search.length > 3 && debouncedSearchValue.length > 3 && <Options />}
      </SearchString.Provider>
    </div>
  );
}

const Options = () => {
  const { search } = useContext(SearchString);
  const { loading, error, data } = useQuery(GET_LOCATIONS, {
    variables: { search: search }
  });

  if (loading) {
    return <Spinner />
  }

  if (error) {
    console.log('Error! ' + error.message);
    return null;
  }

  return (
    <div className='options'>
      {data.locations.map((location: Location) => (
        <Option key={location.id} location={location} />
      ))}
    </div>
  )
}

const Option = ({ location }: { location: Location }) => {
  const { setCurrentLocation } = useCurrentLocation();
  const { setSearch } = useContext(SearchString);
  const { url, name, region, country } = location;

  const handleClick = () => {
    setSearch('');
    setCurrentLocation(url)
  }

  return (
    <button className='option' type='submit' onClick={handleClick}>
      {name}, {region}
      <small className='option__country'>{country}</small>
    </button>
  )
}
