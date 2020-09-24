import { useContext } from "react";
import jwtDecode from "jwt-decode";
import AuthContext from "./context";
import storage from "../auth/storage";

export default useAuth = () => {
  const { user, setUser } = useContext(AuthContext);

  const logout = () => {
    setUser(null);
    storage.removeToken();
  };

  const login = (authToken) => {
    const user = jwtDecode(authToken);
    setUser(user);
    storeToken(authToken);
  };

  return { login, logout, user, setUser };
};
