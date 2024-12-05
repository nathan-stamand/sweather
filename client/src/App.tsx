import './App.css'
import { Search } from './features/search'
import { Current } from './features/current';
import { useCurrentLocation } from './providers/current-location';

function App() {
  const { currentLocation } = useCurrentLocation();
  return (
    <>
      <header>
        <h1>s'weather</h1>
      </header>
      <main>
        <Search />
        {currentLocation && (
          <Current />
        )}
      </main>
    </>
  )
}

export default App
