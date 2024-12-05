import './App.css'
import { Search } from './features/search'
import { Current } from './features/current';
import { useCurrentLocation } from './providers/current-location';
import { Settings } from './features/settings';

function App() {
  const { currentLocation } = useCurrentLocation();
  return (
    <>
      <header>
        <hr />
        <h1>s'weather</h1>
        <Settings />
        <hr />
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
