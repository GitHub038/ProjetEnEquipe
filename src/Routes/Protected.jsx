import { Context } from '@/Context/AuthContext'
import { useContext } from 'react'
import { Navigate } from 'react-router-dom'

const Protected = ({ children }) => {
  const { user } = useContext(Context)
  if (!user) {
    return <Navigate to="/" replace />
  } else {
    return children
  }
}

export default Protected
