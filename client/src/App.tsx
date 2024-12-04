import './App.css'
import { Search } from './features/search'
import { useCurrentLocation } from './providers/current-location'

function App() {
  const { currentLocation } = useCurrentLocation();
  console.log(currentLocation);

  return (
    <>
      <header>
        <h1>s'weather</h1>
      </header>
      <main>
        <Search />
      </main>
    </>
  )
}

export default App
