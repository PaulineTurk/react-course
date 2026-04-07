import { Routes, Route } from 'react-router'
import HomePage from './components/HomePage'
import './App.css'
import CheckoutPage from './components/CheckoutPage'
import OrdersPage from './components/OrdersPage'

function App() {
  return (

    <Routes>
      <Route
        index
        element={<HomePage />}
      />
      <Route
        path="/checkout"
        element={<CheckoutPage />}
      />
      <Route
        path='orders'
        element={<OrdersPage />}
      />
    </Routes>
  )
}

export default App
