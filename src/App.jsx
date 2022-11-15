import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css'
import Layout from './pages/Layout'
import Home from './pages/Home'
import Eje01 from './pages/Eje01'
import Eje02 from './pages/Eje02'
import Eje03 from './pages/Eje03'
import Eje04 from './pages/Eje04'
import Eje05 from './pages/Eje05'
import Eje06 from './pages/Eje06'
import Eje07 from './pages/Eje07'
import Eje08 from './pages/Eje08'
import Eje09 from './pages/Eje09'
import Eje10 from './pages/Eje10'
import Eje11 from './pages/Eje11'
import Eje12 from './pages/Eje12'
import Eje13 from './pages/Eje13'
import Eje14 from './pages/Eje14'
import Eje15 from './pages/Eje15'
import NoPage from './pages/NoPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="eje01" element={<Eje01 />} />
          <Route path="eje02" element={<Eje02 />} />
          <Route path="eje03" element={<Eje03 />} />
          <Route path="eje04" element={<Eje04 />} />
          <Route path="eje05" element={<Eje05 />} />
          <Route path="eje06" element={<Eje06 />} />
          <Route path="eje07" element={<Eje07 />} />
          <Route path="eje08" element={<Eje08 />} />
          <Route path="eje09" element={<Eje09 />} />
          <Route path="eje10" element={<Eje10 />} />
          <Route path="eje11" element={<Eje11 />} />
          <Route path="eje12" element={<Eje12 />} />
          <Route path="eje13" element={<Eje13 />} />
          <Route path="eje14" element={<Eje14 />} />
          <Route path="eje15" element={<Eje15 />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
