import React from "react";
import ShoppingList from "./components/ShoppingList";
import './App.css';

 function App() {

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode); // Toggle the dark mode state
  };

  return (
    // <div style={{ backgroundColor: "#fcd1d1", minHeight: "100vh", padding: "20px" }}>
    //   <h1 style={{ textAlign: "center", fontWeight: "bold", marginBottom: "20px" }}>
    //     Project 4: Shopping List
    //   </h1>
    //   <ShoppingList />
    // </div>



<div className="bg-red-200 bg-opacity-25 min-h-screen p-5">
    <h1 className="text-center font-bold mb-5">Shopping List</h1>
    <ShoppingList />
</div>


  );
}

export default App;
