import { Routes, Route } from 'react-router-dom';
import './App.css'
import Dashboard from './pages/Dashboard'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="*" element={<p style={{ padding: "2rem" }}>404 - Page Not Found</p>} />
      </Routes>
    </>
  )
}

export default App
