import { createRoot } from 'react-dom/client'
import './index.css'
import { App } from './App'
import { ContextProvider } from './context/Context'
import { AuthProvider } from './context/AuthContext'
import { ToastContainer } from 'react-toastify'

createRoot(document.getElementById('root')).render(
  <ContextProvider>
    <AuthProvider>
      <App />
    </AuthProvider>
    <ToastContainer
      position='top-right'
      autoClose={2000}
      hideProgressBar
      newestOnTop={false}
      closeOnClick={false}
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover={false}
      theme='light'
    />
  </ContextProvider>
)
