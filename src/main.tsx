import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from './Pages/HomePage';
import ShopPage from './Pages/ShopPage';
import AboutPage from './Pages/AboutPage';
import ContactPage from './Pages/ContactPage';
import ServicePage from './Pages/ServicePage';

import './index.css'



const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/shop", element: <ShopPage /> },
  { path: "/service", element: <ServicePage /> },
  { path: "/about", element: <AboutPage /> },
  { path: "/contact", element: <ContactPage /> },
]);
console.log(router)

createRoot (document.getElementById('root')!).render(
  <StrictMode>
        <RouterProvider router={router} />

  </StrictMode>,
)
