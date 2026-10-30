import { configureStore } from '@reduxjs/toolkit'
import  todoSlice  from '../features/todo/todoSlice'


const app = configureStore({
    reducer:todoSlice,
})

export default app