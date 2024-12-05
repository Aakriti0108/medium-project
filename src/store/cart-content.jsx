import { createContext, useState } from "react";

export const CounterContext = createContext({
  user: {}, // Initialize as an object
  setUser: () => {},
});

export const CounterProvider = ({ children }) => {
  const [user, setUser] = useState({}); // Use an object for user data

  return (
    <CounterContext.Provider value={{ user, setUser }}>
      {children}
    </CounterContext.Provider>
  );
};

export default CounterProvider;
