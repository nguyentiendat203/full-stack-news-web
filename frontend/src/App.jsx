import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import { HomePage } from './pages/HomePage'

export const App = () => {
  const router = createBrowserRouter(createRoutesFromElements(<Route index element={<HomePage />} />))
  return <RouterProvider router={router} />
}
