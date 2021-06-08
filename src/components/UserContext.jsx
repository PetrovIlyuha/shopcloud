import * as React from "react";
import useAuth from "../hooks/useAuth";

const UserContext = React.createContext();

export const UserStateProvider = ({ children }) => {
  const { user, loading } = useAuth();
  return (
    <UserContext.Provider value={{ user, loading }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserState = () => {
  const { user, loading } = React.useContext(UserContext);
  return { user, loading };
};
