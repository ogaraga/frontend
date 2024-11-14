import { useEffect, useState } from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const savedUserEmail = localStorage.getItem("user");
    return savedUserEmail? JSON.parse(savedUserEmail) : {user: ''}});

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
export default UserContextProvider;
