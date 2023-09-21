"use client"

import { useState, useEffect, useContext, createContext} from 'react';
import { onAuthStateChangedListener, createUserDocFromAuth } from '@/utilities/firebase.utils';




export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null
});

export const UserProvider = ({children}) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = {currentUser, setCurrentUser};

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) createUserDocFromAuth(user);

      setCurrentUser(user);
    });

    return unsubscribe;
  }, [])

  return <UserContext.Provider value={value} >{children}</UserContext.Provider>
}
export const UseUserContext = () => useContext(UserContext);