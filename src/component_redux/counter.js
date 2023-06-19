import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add1, addCustom, resetCounter } from '../features/counterSlice'

export default function Counter() {
    const dispatch = useDispatch()
    const {counter, user} = useSelector(myStore=>myStore.counterSlice)
    return (
        <div>
            <h2>Counter: {counter}</h2>
            <button onClick={()=>{
                dispatch(add1())
            }}>Add 1</button>
            <button onClick={()=>{
                dispatch(addCustom({val:5}))
            }}>Add 5</button>
            <button onClick={()=>{
                dispatch(resetCounter())
            }}>Reset all</button>
            <button onClick={()=>{
                dispatch(addCustom({val:6}))
            }}>Add 6</button>
           <h3>user: {user}</h3>
        </div>
    )
}

