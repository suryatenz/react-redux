import { createSlice , nanoid } from "@reduxjs/toolkit"

const initialState = {
    todos:[
        {
            id:nanoid(),
            text:"Focussss......",
            price:100
        }
    ],
    theme:true,
}

export const todoSlice = createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            const todo = {
                id:nanoid(),
                text:action.payload,
            }
            state.todos.push(todo)
        },
        removeTodo:(state,action)=>{
            state.todos = state.todos.filter((todo)=>todo.id!==action.payload)
        },
        editTodo:(state,action)=>{
            // state.todos = state.todos.find((todo)=>todo.id === action.id)
            if(state.id === action.id){
                let userInput = prompt("Please enter some data:");
                const todo ={
                    id:nanoid(),
                    text:userInput,
                }
                state.todos = state.todos.filter((todo)=>todo.id!==action.payload)
                state.todos.push(todo)
            }
        },
        themechanger: (state) => {
            state.theme  = !state.theme;
        }
    }
})

export const {addTodo , removeTodo , editTodo} = todoSlice.actions

export const {themechanger} = todoSlice.actions

export default todoSlice.reducer