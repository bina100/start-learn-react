import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteSingleTodo } from '../features/todoSlice'

export default function TodoList() {
    const dispath = useDispatch()
    const { todos_ar } = useSelector(store => store.todosSlice)
    return (
        <div className='container col-md-6 my-2'>
            <h2>Tist of Todos:</h2>
            {todos_ar.map(item => {
                return (
                    <div key={item.id} className='col-md-11 my-2 border'>
                        <span className='d-flex '>
                            <h2>{item.name} - {item.time}</h2>
                            <button onClick={()=>{dispath(deleteSingleTodo({id:item.id}))}} >X</button>
                            </span>

                    </div>
                )
            })}

        </div>
    )
}
