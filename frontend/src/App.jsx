import { createBrowserRouter, RouterProvider, useLocation } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { MainLayout } from './Layout/MainLayout'
import { DetailPage } from './pages/DetailPage'
import { useEffect } from 'react'
import { PostsByCate } from './pages/PostsByCate'

export default function ScrollToTop({ children }) {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return children
}

export const App = () => {
  const router = createBrowserRouter([
    {
      path: '',
      element: (
        <ScrollToTop>
          <MainLayout />
        </ScrollToTop>
      ),
      children: [
        { path: '/', element: <HomePage /> },
        { path: '/posts/:slug', element: <DetailPage /> },
        { path: '/category/:id', element: <PostsByCate /> }
      ]
    }
  ])
  return <RouterProvider router={router} />
}
