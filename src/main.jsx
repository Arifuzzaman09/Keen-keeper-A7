import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router/dom'
import RootLoyout from './Layout/RootLoyout'
import "./index.css"
import NotFound from './pages/Notfound/NotFound'
const router = createBrowserRouter(
  [
    {
      path:"/",
      element: <RootLoyout></RootLoyout>,
      children:[
      {
        path:"/",
        element: <h2>Home</h2> 
      },
      {
        path:"/timeline",
        element: <h2>TimeLime</h2> 
      },
      {
        path:"/stats",
        element: <h2>Stats</h2> 
      }
      ],
      errorElement: <NotFound></NotFound>
    }
  ]
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
