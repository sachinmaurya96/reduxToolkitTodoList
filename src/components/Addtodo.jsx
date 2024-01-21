import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { addTodo, setInput, updateTodo } from '../features/todo/todoSlice'


function AddTodo() {
    const [message,setMessage] = useState("")
    const dispatch = useDispatch()

    const editItem = useSelector((state)=>state.editItem )
    const input = useSelector((state)=>state.input )
    
    const addTodoHandler = (e) => {
        e.preventDefault()
        if(!input){
          setMessage("please input something")
          setTimeout(()=>{
            setMessage("")
          },3000)
        }else if(editItem.id !== ""){
         dispatch(updateTodo({id:editItem.id,text:input}))
        }else{
          dispatch(addTodo(input))
        }
    }

  return (
    <form onSubmit={addTodoHandler} className="space-x-3 mt-12 flex gap-1 flex-col w-full">
      <input
        type="text"
        className=" bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => dispatch(setInput(e.target.value))}
      />
      <p className='text-red-500'>{message}</p>
      <button
        type="submit"
        
        className=" text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >
       {editItem.id!==""? "Edit Todo":"Add Todo"}
      </button>
    </form>
  )
}

export default AddTodo