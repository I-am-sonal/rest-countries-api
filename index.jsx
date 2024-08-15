import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import Contact from './components/Contact'
import Home from './components/Home'
import ErrorPage from './components/ErrorPage'
import CountryDetail from './components/CountryDetail'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,

    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/:country',
        element: <CountryDetail />,
      },
    ],
  },
])

const root = createRoot(document.getElementById('root'))

root.render(<RouterProvider router={router} />)
