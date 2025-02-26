import { Navigate } from 'react-router-dom'
import { useContext } from 'react'
import AuthContext from '../context/AuthContext'
import { toast } from 'react-toastify'

export const PrivateLayout = ({ children }) => {
  const { user } = useContext(AuthContext)
  if (!user) toast.error('Vui lòng đăng nhập')
  return !user ? <Navigate to='/' /> : children
}
