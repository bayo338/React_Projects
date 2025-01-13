import { faTimes } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"

const AddTodoModal = ({onClose, onSubmit, initilalTodo}) => {
    const [todo, setTodo] = useState(initilalTodo)

    const handleSubmit = () => {
        if (!todo.title || !todo.title.trim() || !todo.dueDate) {
            alert("Please fill in all fields");
            return
    }

    onSubmit(todo);
    onClose();
}
    return (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-25 flex items-center justify-center">
            <div className="w-2/5 bg-white rounded-lg shadow-lg px-4 py-6 min-w-[300px] relative">
            <h1 className="text-2x1 font-bold">{todo?.id ? "Edit" : "Add"} Task</h1>
            <div className="absolute top-3 right-4 rounded cursor-pointer active:border-2 p-1.5" onClick={onClose}>
                <FontAwesomeIcon icon={faTimes} size="xl" color="red"/>
            </div>

            <div className="flex flex-col gap-4 mt-4">
            <div className="flex flex-col gap-2">
                <label>Title<span className="text-red-500 align-top">*</span></label>
                <input type="text" placeholder="Title" className="border-2 px-2 py-2 text-lg text-gray-400 rounded-lg w-full focus:outline-blue-500"
                value ={todo?.title}
                onChange = {(e) => {
                    setTodo({...todo, title: e.target.value})
                    }}
                />
                
            </div>

            <div className="flex flex-col gap-2">
                <label>Description(Optional)</label>
                <input type="text" placeholder="Description" className="border-2 px-2 py-2 text-lg text-gray-400 rounded-lg w-full focus:outline-blue-500"
                value ={todo?.details}                
                onChange = {(e) => {
                    setTodo({...todo, details: e.target.value})
                    }}
                />
            </div>

            <div className="flex flex-col gap-2">
                <label>Deadline<span className="text-red-500 align-top">*</span></label>
                <input type="date" placeholder="Gender" className="border-2 px-2 py-2 text-lg text-gray-400 rounded-lg w-full focus:outline-blue-500"
                value ={todo?.dueDate}
                onChange = {(e) => {
                    setTodo({...todo, dueDate: e.target.value})
                    }}
                />
            </div>

            <button className="bg-blue-600 text-white py-2 border-2 border-blue-500 font-bold rounded-lg"
            onClick={handleSubmit}
            >{todo?.id ? "Edit" : "Add"} Task</button>

                </div>            
            </div>
        </div>
    )
        
    
}

export default AddTodoModal