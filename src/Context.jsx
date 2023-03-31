import { useState } from 'react';
import { createContext } from 'react';



const Context = createContext();

function ContextProvider({ children }) {
  

  const [isConfirmed, setIsConfirmed] = useState(false);

  const [userInfo, setUserInfo] = useState({
    name: '',
    username: '',
    email: '',
    number: '',
    password:''
  });

  return (
    <Context.Provider
      value={{
       
        userInfo,
        setUserInfo,
       
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };