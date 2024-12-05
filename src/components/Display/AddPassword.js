import React, { useState, useEffect } from "react";
import Button from "../UI/Button/Button";

const AddPassword = ({ onClick, editItem, setUser, user }) => {
  const [enteredUserName, setEnteredUserName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  useEffect(() => {
    if (editItem) {
      // Populate fields when editing
      setEnteredUserName(editItem.data.enteredUserName);
      setEnteredAge(editItem.data.enteredAge);
    }
  }, [editItem]);

  const submitHandler = (event) => {
    event.preventDefault();

    if (editItem) {
      // Update existing item
      setUser((prevUser) => ({
        ...prevUser,
        [editItem.key]: { enteredUserName, enteredAge },
      }));
    } else {
      // Add new item with a unique key
      const newKey = `key_${Date.now()}`;
      setUser((prevUser) => ({
        ...prevUser,
        [newKey]: { enteredUserName, enteredAge },
      }));
    }

    onClick(); // Close the modal
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          value={enteredUserName}
          onChange={(e) => setEnteredUserName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="age">Password</label>
        <input
          id="age"
          type="text"
          value={enteredAge}
          onChange={(e) => setEnteredAge(e.target.value)}
        />
      </div>
      <Button type="submit">
        {editItem ? "Update Password" : "Add Password"}
      </Button>
      <Button type="button" onClick={onClick}>
        Cancel
      </Button>
    </form>
  );
};

export default AddPassword;
