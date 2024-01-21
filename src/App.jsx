import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodo from './components/Addtodo'
import Todos from './components/Todos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className="container-todo">
     <h1>Learn about redux toolkit</h1>
     <AddTodo/>
     <Todos/>
     </div>
    </>
  )
}

export default App
