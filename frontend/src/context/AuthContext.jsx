import { createContext, useContext, useEffect, useState } from 'react'
import { jwtDecode } from 'jwt-decode'

import { fetchData } from '../utils/fetchData'
import { toast } from 'react-toastify'
import { Context } from './Context'

const apiUrl = import.meta.env.VITE_API_URL
const AuthContext = createContext()
export default AuthContext

export const AuthProvider = ({ children }) => {
  const { setIsModalOpen } = useContext(Context)

  let [user, setUser] = useState(() => (localStorage.getItem('authTokens') ? jwtDecode(localStorage.getItem('authTokens')) : null))
  let [authTokens, setAuthTokens] = useState(() => (localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null))

  const loginUser = async (reqBody) => {
    try {
      const response = await fetchData(`${apiUrl}/api/token/`, 'POST', {}, reqBody)

      // ------------Set localStorage
      localStorage.setItem('authTokens', JSON.stringify(response))
      setAuthTokens(response)
      setUser(jwtDecode(response.access))
      if (response.access) {
        setIsModalOpen(false)
        toast.success('Đăng nhập thành công')
      } else {
        setIsModalOpen(true)
      }
    } catch (error) {
      toast.error('Tài khoản hoặc mật khẩu không đúng!')
    }
  }

  const logoutUser = () => {
    localStorage.removeItem('authTokens')
    setAuthTokens(null)
    setUser(null)
  }

  const contextData = {
    user,
    authTokens,
    loginUser: loginUser,
    logoutUser: logoutUser
  }

  useEffect(() => {
    const REFRESH_INTERVAL = 1000 * 60 * 60 * 23
    let interval = setInterval(() => {
      logoutUser()
    }, REFRESH_INTERVAL)
    return () => clearInterval(interval)
  }, [authTokens])

  return <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
}
