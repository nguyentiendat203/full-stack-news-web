import { createContext, useState } from 'react'

export const Context = createContext()
export const ContextProvider = ({ children }) => {
  const [cateId, setCateId] = useState(null)
  const [arrowLeft, setArrowLeft] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  return <Context.Provider value={{ cateId, setCateId, arrowLeft, setArrowLeft, isModalOpen, setIsModalOpen }}>{children}</Context.Provider>
}
