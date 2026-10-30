import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { themechanger } from '../features/todo/todoSlice';


const Navbar = () => {

    const dispach = useDispatch()
    const theme = useSelector(state => state.theme);
    const ToggleEvent = ()=>{
       dispach(themechanger())
    }

  return (
    <>
    <div className='text-xl' style={{color:theme ==false?'white':'black'}}>
        <div className="flex flex-wrap ml-5">
            <button
            onClick={()=>ToggleEvent()}
            className='bg-red-900 px-2 py-1'
            style={{backgroundColor:theme == false?'black':'red'}}
            >Toggle</button>
        </div>
    </div>
    </>
  )
}

export default Navbar
