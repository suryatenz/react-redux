import { useSelector } from "react-redux"
import AddTodo from "./components/AddTodo"
import Navbar from "./components/Navbar"
import Todos from "./components/Todos"

function App() {

  const theme = useSelector((state)=>state.theme)
  
  return(
    <>
    <div className="bg-slate-500 h-screen w-screen"
    style={{backgroundColor:theme==false?'orange':'black'}}>
      <Navbar/>
    <AddTodo/>
    <Todos/>
    </div>
    </>
  )
}

export default App
