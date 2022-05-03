import React from 'react'
import { Dashboard, Error, Account } from './pages'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navbar } from './components'
import PrivateRoute from './pages/PrivateRoute'

// TODO: add protected routes to login if is login .. add a isLoggedIn in context.
// TODO: I added firebase, check that.
// TODO: contex api
// add mock data
//  add info component
// add card component
// add followers

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          exact
          path='/'
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route path='/login' element={<Account />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
