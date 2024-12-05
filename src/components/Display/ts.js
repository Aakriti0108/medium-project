import React, { useContext, useState } from "react";
import { CounterContext } from "../../store/cart-content"; // Correct path to your context

const AddPassword = () => {
  const { user, setUser } = useContext(CounterContext); // Must match the exported context

  const [enteredUserName, setEnteredUserName] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");

  const addUserHandler = (event) => {
    event.preventDefault();
    if (!enteredUserName.trim() || !enteredPassword.trim()) {
      alert("Please fill in both fields.");
      return;
    }
    setUser({ username: enteredUserName, password: enteredPassword });
    setEnteredUserName("");
    setEnteredPassword("");
  };

  return (
    <form onSubmit={addUserHandler}>
      <label>Username</label>
      <input
        type="text"
        value={enteredUserName}
        onChange={(e) => setEnteredUserName(e.target.value)}
      />
      <label>Password</label>
      <input
        type="password"
        value={enteredPassword}
        onChange={(e) => setEnteredPassword(e.target.value)}
      />
      <button type="submit">Add User</button>
    </form>
  );
};

export default AddPassword;
