import React, { useContext } from 'react';
import './App.css';
import PasswordScreen from "./components/Display/PasswordScreen"
import { CounterProvider,CounterContext } from "./store/cart-content";

function App() {
  
     return(
      <CounterProvider>
         <PasswordScreen />
      </CounterProvider>
        )
}

export default App;
