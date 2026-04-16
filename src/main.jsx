import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { RouterProvider } from 'react-router/dom'
import RootLoyout from './Layout/RootLoyout'
import "./index.css"
import NotFound from './pages/Notfound/NotFound'
import HomePage from './pages/homepage/HomePage'
import { router } from './components/router/Routes'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
