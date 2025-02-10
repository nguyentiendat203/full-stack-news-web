import { createContext, useState } from 'react'

export const Context = createContext()
export const ContextProvider = ({ children }) => {
  const [cateId, setCateId] = useState(null)
  const [arrowLeft, setArrowLeft] = useState(false)

  return <Context.Provider value={{ cateId, setCateId, arrowLeft, setArrowLeft }}>{children}</Context.Provider>
}
