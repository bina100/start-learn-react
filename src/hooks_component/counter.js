import React, { useState } from 'react'

export default function Counter() {
    const [counter, setCounter] = useState(4)
    const [user, setUser] = useState("koko")

    const onAdd1 = () => {
        setCounter(counter + 1)
        if (counter + 1 > 10) {
            setUser("jeck")
        }
    }

    return (
        <div>
            <h2>Counter {user}: {counter}</h2>
            <button className='btn btn-success mx-2' onClick={onAdd1}>Add 1</button>
            <button className='btn btn-danger mx-2' onClick={() => setCounter(counter - 5)}>Reduce 5</button>
        </div>
    )
}