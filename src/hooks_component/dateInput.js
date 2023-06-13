import React, { useRef } from 'react'

export default function DateInput(props) {

    const inputRef = useRef()

    const onChangeDate = () => {
        props.setDeadline(inputRef.current.value)
    }
    return (
        <div >
            <input ref={inputRef} defaultValue={"2023-01-01"} type='date' className='form-controle p-1' />
            <button onClick={onChangeDate} className='btn btn-info mx-2'>Change</button>
        </div>
    )
}

