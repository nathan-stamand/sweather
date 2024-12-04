import './App.css'
import { useQuery } from '@apollo/client';
import { GET_LOCATIONS } from './lib/queries';
import { Location } from './types/location';

function App() {
  const { loading, error, data } = useQuery(GET_LOCATIONS, {
    variables: { search: 'Austin' }
  });

  console.log(data)

  if (loading) {
    return 'Loading...';
  }

  if (error) {
    return 'Error! ' + error.message
  }

  return (
    <>
      <header>
        <h1>s'weather</h1>
        {data.locations.map((loc: Location) => (
          <div key={loc.url}>{loc.name}</div>
        ))}
      </header>
    </>
  )
}

export default App
