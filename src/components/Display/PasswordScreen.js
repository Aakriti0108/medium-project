import React, { useContext, useState } from "react";
import Button from "../UI/Button/Button";
import AddPassword from "./AddPassword";
import { CounterContext } from "../../store/cart-content";

const PasswordScreen = () => {
  const { user, setUser } = useContext(CounterContext); // Ensure setUser is available in context
  const [design, setDesign] = useState(false);
  const [editItem, setEditItem] = useState(null); // To manage the item being edited
  const [searchQuery, setSearchQuery] = useState(""); // For search functionality

  const numberOfCartItems = Object.keys(user).length;

  const showDesign = () => setDesign(true);
  const hideDesign = () => {
    setDesign(false);
    setEditItem(null); // Reset editing state
  };

  const handleDelete = (key) => {
    const updatedUser = { ...user };
    delete updatedUser[key]; // Remove the key
    setUser(updatedUser); // Update context
  };

  const handleUpdate = (key) => {
    setEditItem({ key, data: user[key] }); // Pass the key and data to editItem
    setDesign(true); // Show AddPassword for editing
  };

  // Filter passwords based on search query
  const filteredPasswords = Object.entries(user).filter(([_, u]) =>
    u.enteredUserName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const passwordList = filteredPasswords.length
    ? filteredPasswords.map(([key, u]) => (
        <ul key={key}>
          <li>
            {u.enteredUserName} : {u.enteredAge} 
            <button onClick={() => handleDelete(key)}>Delete</button> 
            <button onClick={() => handleUpdate(key)}>Update</button>
          </li>
        </ul>
      ))
    : <p>No passwords match your search.</p>;

  return (
    <>
      <div>
        <h1>Password Keeper</h1>
        <h4>Total Passwords: {numberOfCartItems}</h4>
        
        {/* Search Field */}
        <div>
          <input
            type="text"
            placeholder="Search by username..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Button onClick={() => setSearchQuery("")}>Clear Search</Button>
        </div>

        {design && (
          <AddPassword 
            onClick={hideDesign} 
            editItem={editItem} 
            setUser={setUser} 
            user={user} 
          />
        )}
        
        <Button onClick={showDesign}>
          {design ? "Close Add Password" : "Add New Password"}
        </Button>
      </div>
      <div>
        <h2>All Passwords</h2>
        {passwordList}
      </div>
    </>
  );
};

export default PasswordScreen;
