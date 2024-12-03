import './App.css'
import { useQuery } from '@apollo/client';
import { GET_WEATHER } from './lib/queries';

function App() {
  const { loading, error, data } = useQuery(GET_WEATHER);

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
        <h1>s'weather.</h1>
        Location: {data.weather.location.name} <br />
      </header>
    </>
  )
}

export default App
