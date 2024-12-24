import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider} from "react-router-dom"
import {routes} from "./pages/Routes"


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <App /> */}

    <RouterProvider router={routes}/>
  </StrictMode>,
)
