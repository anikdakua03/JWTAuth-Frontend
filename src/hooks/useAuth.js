import { useContext } from "react"
import AuthContext from "../context/AuthProvider"

// cutome hooks
const useAuth = () => {
  return useContext(AuthContext);
}

export default useAuth