import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header';
import Home from './pages/Home';
import SingleCupsPage from './pages/SingleCupsPage';
import DoubleCupsPage from './pages/DoubleCupsPage';
import CorrugatedCupsPage from './pages/CorrugatedCupsPage';
import PlatesPage from './pages/PlatesPage';
function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/single-cups" element={<SingleCupsPage />} />
        <Route path="/double-cups" element={<DoubleCupsPage />} />
        <Route path="/corrugated-cups" element={<CorrugatedCupsPage />} />
        <Route path="/plates" element={<PlatesPage />} />
      </Routes>
    </Router>
  )
}

export default App
