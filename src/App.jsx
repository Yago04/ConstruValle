import { createBrowserRouter } from 'react-router-dom'
import Home from  './pages/home.jsx'
import Sobre from './pages/sobre.jsx'

export const router = createBrowserRouter([
  
  {
    path: "/home",
    element: <Home />, 
  },
  {
    path: "/sobre",
    element: <Sobre />,
  },
])