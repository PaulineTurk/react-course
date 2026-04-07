import { Routes, Route } from 'react-router'
import HomePage from './components/HomePage'
import './App.css'

function App() {
  return (

    <Routes>
      <Route
        index
        element={<HomePage />}
      />
      <Route
        path="/checkout"
        element={<div> test </div>}
      />
    </Routes>
  )
}

export default App
