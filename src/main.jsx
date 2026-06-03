import React from 'react'
import ReactDOM from 'react-dom/client'
// Trocamos o createBrowserRouter por createHashRouter
import { createHashRouter, RouterProvider, Navigate } from 'react-router-dom'
import Home from './pages/home.jsx'
import Sobre from './pages/sobre.jsx'
import Servicos from './pages/servicos.jsx'
import Obras from './pages/obras.jsx'
import Diferenciais from './pages/diferenciais.jsx'
import Contato from './pages/contato.jsx'
import './index.css'

// O HashRouter vai criar URLs no formato: yago04.github.io/seu-repositorio/#/home
const router = createHashRouter([
  {
    path: "/",
    element: <Navigate to="/home" replace />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/sobre",
    element: <Sobre />,
  },
  {
    path: "/servicos",
    element: <Servicos />,
  },
  {
    path: "/obras",
    element: <Obras />,
  },
  { 
    path: "/diferenciais",  
    element: <Diferenciais />,
  },
  { 
    path: "/contato",
    element: <Contato />,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)