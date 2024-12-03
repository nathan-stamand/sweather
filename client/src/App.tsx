import { useEffect, useState } from 'react';
import './App.css'

function App() {
  const [message, setMessage] = useState('')

  useEffect(() => {
    async function get() {
      const response = await fetch('http://localhost:8000', {
        mode: 'cors',
        headers: {
          'Access-Control-Allow-Origin': 'http://localhost:8000'
        }
      });
      const data = await response.json();
      console.log(data);
      setMessage(data.message);
    }
    get();
  }, []);

  return (
    <>
      <header>
        <h1>s'weather.</h1>
        {message}
      </header>
    </>
  )
}

export default App
