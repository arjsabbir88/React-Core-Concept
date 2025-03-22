
import './App.css'
import Mobile, {Todo} from './toDo'

function App() {

  return (
    <>
      
      <h1>Vite + React</h1>
      <div>
        <Todo task= "daily practice" isDone = {true}></Todo>
        <Todo task= "Daily Recap" isDone = {!true}></Todo>
        <Todo task= "Class study" isDone = {true}></Todo>
      </div>
      <div>
        <Mobile brand= "Vivo" price= "4500" color= "black"></Mobile>
        <Mobile brand= "Samsung" price= "14500" color= "white"></Mobile>
        <Mobile brand= "IPhone" price= "15500" color= "black"></Mobile>
      </div>
    </>
  )
}

export default App
