import AddToDo from "./componets/AddToDo"
import AppName from "./componets/AppName"
import TodoItem1 from "./componets/TodoItem1"
import "./App.css";

function App() {

  return (
    <center className='todo-container'>
      <AppName></AppName>

      <div className="items-container">
        <AddToDo/>
        <TodoItem1/>
      </div>

    </center>
  )

}
 
export default App
