import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todo/todoSlice'

const AddTodo = () => {

    const [input, setInput] = useState("");
    const dispath = useDispatch();

    const handleAddTodo = (e) =>{
        e.preventDefault();
        dispath(addTodo(input));
        setInput("")
    }
  return (
    <div>
        <form onSubmit={handleAddTodo} className='space-x-3 mt-12'>
            <input 
                className='bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out' 
                type='text'
                placeholder='Enter a Todo'
                value={input}
                onChange={(e) =>setInput(e.target.value)}
            />
            <button className='text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-700 rounded text-lg' type="submit">Add Todo</button>
        </form>
    </div>
  )
}

export default AddTodo