import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { editTodo, removeTodo, themechanger } from '../features/todo/todoSlice'
import { nanoid } from '@reduxjs/toolkit'

const Todos = () => {

    const todos = useSelector((state)=>state.todos)
    const dispach = useDispatch()
    const theme = useSelector((state)=>state.theme)

    return (
    <>
    <div className="">
      <ul className='list-none'>
     {
      todos.length > 0 ?(
      todos.map((data)=>(
          <li className='flex justify-between items-center mt-10 ml-10 mr-10 bg-black text-white px-4 py-4 rounded' 
          style={{color:theme==false?'white':'black',backgroundColor:theme==false?'black':'white'}}
          key={data.id}>
              <div>{data.text ? data.text : "Enter data" }</div>
              <div className="">
            <button
            onClick={()=>dispach(editTodo(data.id))}
            className='bg-red-700 px-3 py-1 mr-3 rounded'style={{color:theme==false?'black':'white',backgroundColor:theme==false?'orange':'red'}} >Edit</button>
            <button
            onClick={()=>dispach(removeTodo(data.id))}
            className='bg-red-700 px-3 py-1 rounded' style={{color:theme==false?'black':'white',backgroundColor:theme==false?'orange':'red'}}>Delete</button>
            </div>
            </li>
      ))):(<p className=' text-white flex justify-center mt-10 text-3xl'>Enter data</p>)
     }
     </ul>
    </div>
    </>
  )
}

export default Todos
