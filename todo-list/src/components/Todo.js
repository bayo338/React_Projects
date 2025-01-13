import { faCheck, faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Todo = ({ todo, onDelete, onEdit, onToggle }) => {

  const modifyDate = (date) => {
    let months = ['Jan', 'Feb','Mar','Apr','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    let dateObj = new Date(date);
    let day = dateObj.getDate();
    let month = dateObj.getMonth();
    let year = dateObj.getFullYear();
  
    return `${day} ${months[month]} ${year}`;
  }
    return (
        <div className="border-2 border-blue-500 rounded-lg p-4 flex flex-col gap-2 group">
          <div className="flex justify-between items-center mb-1">
            <div className="flex gap-3 items-center">
              <div className={`w-6 aspect-square ${todo.completed ? 'bg-blue-500' : 'bg-transparent'} flex items-center justify-center justify-center rounded border-2 border-blue-500`}>
                <FontAwesomeIcon icon={faCheck} size="sm" color="white" onClick={() => onToggle(todo.id)}/>
              </div>
              <p className={`text-xl font-semibold ${todo.completed ? 'line-through' : 'no-underline'}`}>{todo.title}</p>
            </div>
            <div className="flex items-center gap-6 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto">
              <FontAwesomeIcon icon = {faPen} size = "x1" className="cursor-pointer active:scale-90"
              onClick={() => onEdit(todo.id)}/>
              <FontAwesomeIcon icon = {faTrash} size = "x1" className="cursor-pointer active:scale-90" onClick={() => onDelete(todo.id)}
              /> 
            </div>
          </div>
          
        <p>
          { todo.details}
        </p>
        <p className="text-red-500 text-sm">Due {modifyDate(todo.dueDate)}</p>      
        </div>
        );
}

export default Todo;