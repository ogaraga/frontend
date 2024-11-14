import { useEffect, useState } from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const savedUserEmail = localStorage.getItem("");
    return savedUserEmail? JSON.parse(savedUserEmail) : {user: ''}});

  useEffect(() => {
    localStorage.setItem("", JSON.stringify(user));
  }, [user]);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
export default UserContextProvider;
