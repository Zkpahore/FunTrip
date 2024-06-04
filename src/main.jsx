import React from 'react'
import ReactDOM from 'react-dom/client'
import Router from './Router/Router.jsx'
import './index.css'
import Booking from './Pages/Booking.jsx';
import Facities from './Pages/Facities.jsx';
import AboutUs from './Pages/AboutUs.jsx';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import Home from './components/Home.jsx';
import Location from './Pages/Location.jsx';
import Contact from './Pages/Contact.jsx';
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Router />}>
    <Route path='' element={<Home />} />
    <Route path='booking' element={<Booking />} />
    <Route path='Facities' element={<Facities />} />
    <Route path='About-Us' element={<AboutUs />} />
    <Route path='location' element={<Location />} />
    <Route path='contact' element={<Contact />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
