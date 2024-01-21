import { createSlice, nanoid } from "@reduxjs/toolkit";
const initialState = {
    todos:[{id:1,text:"hello world"}],
    editItem:{id:"",text:""},
    input:"",
  
}

export const todoSlice = createSlice({
    name:"todo",
    initialState,
    reducers:{
        setInput:(state,action)=>{
            state.input=action.payload
        },
        addTodo:(state,action)=>{
            const todo = {
                id:nanoid(),
                text:action.payload
            }
            state.todos.push(todo)
            state.input = ""
        },
        removeTodo:(state, action)=>{
            state.todos = state.todos.filter((todo)=>todo.id !== action.payload)
        },
        editTodo:(state,action)=>{
            state.editItem.id = action.payload.id
            state.editItem.text = action.payload.text
            state.input = action.payload.text
        },
        updateTodo:(state, action)=>{

            state.todos = state.todos.map((todo)=>{
                if(todo.id === action.payload.id){
                    todo.text = action.payload.text
                }
                return todo
            })

            state.editItem.id=""
            state.editItem.text=""
            state.input = ""
        }
    }
})

export const {addTodo, updateTodo, removeTodo, editTodo,setInput} = todoSlice.actions

export default todoSlice.reducer