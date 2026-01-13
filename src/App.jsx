import React from 'react'
import Home from './pages/Home.jsx'
import BookingTickets from './pages/BookingTickets.jsx'
import CheckoutPage from './pages/CheckoutPage.jsx'
import { Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/booking-tickets' element={<BookingTickets />} />
        <Route path='/checkout' element={<CheckoutPage />} />
      </Routes>
    </div>
  )
}

export default App
