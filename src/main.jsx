import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx'
import './index.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Body from './components/Body'
import Index from './components'

const router = createBrowserRouter([
  {
      /* chamando o elemento principal(pai) */
    path: '/',
    /*  chamando o elemento de erro*/
    errorElement: <Error />,

    /* chamando elementos filhos */
    children: [
      { path: '/header', element: <Header /> },
      { path: '/body', element: <Body /> },
      { path: '/Footer', element: <Footer /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <RouterProvider router={router} />
  </React.StrictMode>,
)
