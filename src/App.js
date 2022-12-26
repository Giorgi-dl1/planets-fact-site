import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import PlanetScreen from './screens/PlanetScreen'

function App() {
  return (
    <BrowserRouter>
      <div className="App bg-[#070724] pb-20 relative min-h-screen pointer-events-none overflow-hidden">
        <img
          src="/assets/background-stars.svg"
          alt="background"
          className="absolute top-0 bottom-0 min-h-full w-full object-cover z-0"
        />
        <Header />
        <Routes>
          <Route path="/planet/:name/:show" element={<PlanetScreen />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
