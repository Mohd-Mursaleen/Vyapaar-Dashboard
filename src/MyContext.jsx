// src/MyContext.js
import React, { createContext, useState, useEffect } from "react";
import { fetchUsernames, fetchUserData } from "./utils/api";

const MyContext = createContext();

const MyProvider = ({ children }) => {
  const [state, setState] = useState({
    users: [],
    selectedUser: null,
  });

  useEffect(() => {
    const loadUsernames = async () => {
      const usernames = await fetchUsernames();
      console.log("Usernames:", usernames); // Log the usernames
      setState((prevState) => ({ ...prevState, users: usernames }));
    };
    loadUsernames();
  }, []);

  const selectUser = async (username) => {
    const userData = await fetchUserData(username);
    if (userData) {
      setState((prevState) => ({
        ...prevState,
        selectedUser: userData,
      }));
    }
  };

  return (
    <MyContext.Provider value={{ state, setState, selectUser }}>
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, MyProvider };
