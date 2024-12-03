import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
import { useEffect, useState } from 'react';
import './App.css'

const client = new ApolloClient({
  uri: 'http://localhost:8000',
  cache: new InMemoryCache(),
});

function App() {
  const [location, setLocation] = useState('');
  const [current, setCurrent] = useState('');
  const [forecast, setForecast] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    client.query({
      query: gql`
        query GetForecast {
          forecast {
            current,
            location,
            forecast
          }
        }
     `,
    }).then((result) => {
      console.log(result)
      setLoading(result.loading);
      const { location, current, forecast } = result.data.forecast;
      setLocation(location);
      setCurrent(current);
      setForecast(forecast);
    });
  }, []);

  if (loading) {
    return 'Loading...';
  }

  return (
    <>
      <header>
        <h1>s'weather.</h1>
        Location: {location} <br />
        Current: {current} <br />
        Forecast: {forecast} <br />
      </header>
    </>
  )
}

export default App
