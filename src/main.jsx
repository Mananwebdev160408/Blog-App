import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { BrowserRouter } from "react-router";
import Navbar from './Components/Navbar.jsx';
import Footer from './Components/Footer.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <Navbar/>
      <App />
      <Footer />
  </BrowserRouter>,
)
