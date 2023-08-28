import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deleteTodo } from '../features/todo/todoSlice'

const DisplayTodo = () => {
   const todos = useSelector(state => state.todos);
   const dispath = useDispatch();

   const handleDeleteTodo = (id) =>{
    dispath(deleteTodo(id));
   }
  return (
    <div>
        <h2>Your Todos</h2>
        {
            todos.map((todo) =>{
                return (
                    <ul className='list-none max-w-md'>
                        <li className='mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded' key={todo.id}>
                            <span className='text-white'>{todo.text}</span>
                            <button className='text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-700 rounded text-md' onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
                        </li>
                    </ul>
                )
            })
        }
    </div>
  )
}

export default DisplayTodo