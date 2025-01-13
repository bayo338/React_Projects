import { useEffect, useState } from "react";
import Todo from "./components/Todo";
import './App.css';
import AddTodoModal from "./components/addTodoModal";

const initial = [
  {id: 1, title: "Calculus Homework", details: "Do question 1 and 2 of exercise", completed: false, dueDate: "2023-08-15"},
  {id: 2, title: "Python Homework", details: "", completed: false, dueDate: "2023-08-15"},
  {id: 3, title: "Web Development Project", details: "", completed: false, dueDate: "2023-08-15"},
  {id: 4, title: "Write Medium blog", details: "", completed: false, dueDate: "2023-08-15"},
  {id: 5, title: "Buisness Group Homework", details: "", completed: false, dueDate: "2023-08-15"},
]
 
export default function App() {
  const [todos, setTodos] = useState(initial);
  const [todo, setTodo] = useState(null)
  const [isShowModal, setIsShowModal] = useState(false)
  // let todos = initial


  const handleEdit = (id) => {
    let todo = todos.find((todo) => todo.id === id);
    setTodo(todo);
    showModal(true);  
  }
  
  const handleDelete = (id) => {
    console.log(id);
    let newTodos = todos.filter(todo => todo.id !== id);
    setTodos(newTodos);
  }

  const showModal =() => {
    setIsShowModal(true);
    document.querySelector('body').style.overflow = 'hidden'
  }

const handleAdd =() => {
  setTodo('');
  showModal();
}

  const handleClose = () => {
    setIsShowModal(false);
    document.querySelector('body').style.overflow = 'auto'
  }

  const handleSubmit = (todo) => {
    if(!todo?.id){
      let id = Math.max(...todos.map(todo => todo.id)) + 1;

    setTodos([...todos, {...todo, id: id, completed:false}])
    } else { 
      setTodos(
        todos.map((item, index) => item.id === todo.id ? todo : item)
    )
    }
  }

  const handleToggle = (id) => {
    setTodos(todos.map(todo => 
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
}

const countIncompleteTodos = () => 
  todos.reduce((prev, curr) => !curr.completed ? prev + 1 : prev, 0);



  // () => setIsShowModal(true)
return (
    <div className="border-2 bg-blue-50 text-blue-500 border-blue-500 rounded-xl w-[90%] sm:w-[3/5] md:w-1/2 mx-auto px-4 py-8 mt-10 h-screen grid grid-rows-[auto_1fr] shadow-xl">
      <div>
      <h1 className="text-3xl font-bold">To-Do-List</h1>
      <div className="flex justify-between items-center mt-5">
        <div>
          <h1 className="text-xl font-semibold mb-3">My Tasks</h1>
          {
            todos.length > 0 && <p>You have {countIncompleteTodos()} tasks left</p>
          }          
        </div>
        <div>
          <button className="bg-blue-500 text-white px-10 py-2 rounded-md" onClick={handleAdd}
          >Add Task</button>
      </div>     
    </div>
      </div>
    <main className="mt-6 flex flex-col gap-3 overflow-y-auto shadow-inner">
      {
        todos.length > 0 ? todos.sort((a, b) => b.id - a.id)
        .map((item, index) =>
        <Todo
          todo={item}
          onDelete={handleDelete}
          key={index}
          onEdit={handleEdit}
          onToggle={handleToggle}
          />) :
        <h1 className="text-3xl font-bold text-gray-300 mt-10 text-center">You have no active tasks yet</h1>
      }      
   </main>


   
   {
    // linking of the addTodoModal to App.js
    // linking of the addTodoModal to App.js
    isShowModal && <AddTodoModal onClose={ handleClose} onSubmit={ handleSubmit} initilalTodo ={todo}/>
   }
  </div> 
  )
}