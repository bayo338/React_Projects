import { useState } from "react";
import { faCheck, faPen, faTrash, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const initial = [
  {id: 1, text: "Calculus Homework", details: "Do question 1 and 2 of exercise", completed: false, dueDate: "2023-08-15"},
  {id: 2, text: "Python Homework", details: "", completed: false, dueDate: "2023-08-15"},
]

const ShoppingList = () => {
  const [items, setItems] = useState(initial); // List state
  const [newItem, setNewItem] = useState(""); // Input state
  const [editItemId, setEditItemId] = useState(null); // State to track the item being edited
  const [isDarkMode, setIsDarkMode] = useState(false); // State for dark mode

  // Add or edit item function
  const handleItemSubmit = (e) => {
    e.preventDefault();
    if (newItem.trim() === "") {
      alert("Please enter an item");
      return;
    }

    if (editItemId) {
      // If editing an item
      setItems(
        items.map((item) =>
          item.id === editItemId ? { ...item, text: newItem } : item
        )
      );
      setEditItemId(null); // Clear edit state
    } else {
      // If adding a new item
      setItems([...items, { id: Date.now(), text: newItem }]);
    }

    setNewItem(""); // Clear input
  };

  const toggleCompleted = (id) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  // Delete item function
  const deleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  // On edit function
  const editItem = (id) => {
    const itemToEdit = items.find((item) => item.id === id);
    setNewItem(itemToEdit.text); // Set input value to the item's text
    setEditItemId(id); // Set the edit item ID
  };

  // Toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode); // Toggle the dark mode state
  };

  return (
    <div
      className={`max-w-sm mx-auto p-5 rounded-lg border border-dashed ${
        isDarkMode ? "bg-gray-900 text-white border-gray-700" : "bg-white text-black border-black"
      }`}
    >
      <div className="flex items-center justify-between mb-5">
        <h2 className="font-bold text-lg">Shopping List</h2>
        <button
          onClick={toggleDarkMode}
          className={`p-2 rounded-md ${
            isDarkMode ? "bg-gray-800 text-yellow-400" : "bg-black text-white"
          }`}
        >
          {isDarkMode ? <FontAwesomeIcon icon={faSun} /> : <FontAwesomeIcon icon={faMoon} />}
        </button>
      </div>

      <form onSubmit={handleItemSubmit} className="mb-5">
        <input
          type="text"
          placeholder="Add a new item"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          className={`p-2 border rounded-md mr-2 w-2/3 ${
            isDarkMode ? "bg-gray-800 text-white border-gray-600" : "bg-white text-black border-gray-300"
          }`}
        />
        <button
          type="submit"
          className={`p-2 rounded-md cursor-pointer ${
            isDarkMode ? "bg-gray-700 text-white" : "bg-black text-white"
          }`}
        >
          {editItemId ? "Edit" : "Add"}
        </button>
      </form>

      <ul className="p-0 list-none">
        {items.map((item) => (
          <li
            key={item.id}
            className={`flex justify-between items-center mb-2 text-lg group ${
              isDarkMode ? "border-gray-600" : ""
            }`}
          >
            {/* Checkbox */}
            <div className="flex items-center gap-2">
              <div
                className={`w-6 aspect-square ${
                  item.completed ? "bg-black" : "bg-transparent"
                } flex items-center justify-center rounded border-2 ${
                  isDarkMode ? "border-gray-600" : "border-black"
                } cursor-pointer`}
                onClick={() => toggleCompleted(item.id)}
              >
                {item.completed && (
                  <FontAwesomeIcon icon={faCheck} size="sm" color="white" />
                )}
              </div>
              <span
                className={`${
                  item.completed ? "line-through text-gray-500" : ""
                }`}
              >
                {item.text}
              </span>
            </div>

            {/* Icons */}
            <div className="flex items-center gap-6 text-black-500 bg-transparent border-none font-bold cursor-pointer opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto">
              <FontAwesomeIcon
                icon={faPen}
                size="1x"
                className="cursor-pointer active:scale-90"
                onClick={() => editItem(item.id)}
              />
              <FontAwesomeIcon
                icon={faTrash}
                size="1x"
                className="cursor-pointer active:scale-90"
                onClick={() => deleteItem(item.id)}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingList;
