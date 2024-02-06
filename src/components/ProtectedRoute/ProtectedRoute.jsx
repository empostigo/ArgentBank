import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"

const ProtectedRoute = ({ children }) => {
  const { userAuthenticated } = useSelector(state => state.user)

  if (userAuthenticated) return children

  return <Navigate to="/login" />
}

export default ProtectedRoute
