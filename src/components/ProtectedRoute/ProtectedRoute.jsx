import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"

const ProtectedRoute = ({ children }) => {
  const { userAuthenticated } = useSelector(state => state.user)

  return userAuthenticated ? children : <Navigate to="/login" />
}

export default ProtectedRoute
