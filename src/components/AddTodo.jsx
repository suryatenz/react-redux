import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../features/todo/todoSlice'

const AddTodo = () => {

  const [input,setInput] = useState('')
  const dispach = useDispatch()
  const theme = useSelector((state)=>state.theme)

  const addTodoHandler =(e)=>{
    e.preventDefault()
    dispach(addTodo(input))
    setInput('')
  }

  return (
    <>
    <div className=" flex justify-center">
      <form onSubmit={addTodoHandler} className='space-x-3 mt-12 bg-gradient-to-r from-pink-500 from-25% to-yellow-500 px-5 py-5 rounded'>
        <input type="text" 
        className=' text-black rounded px-2 py-1 bg-white font-serif'
        value={input}
        onChange={(e)=>setInput(e.target.value)}
         />
         <button type='submit' className='text-black bg-white hover:bg-gray-800 hover:text-white py-1 px-2 focus:outline-none rounded- text-lg'>ADDTODO</button>
      </form>
    </div>
    </>
  )
}

export default AddTodo
