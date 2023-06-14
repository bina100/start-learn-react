import React from 'react'
import { useRef } from 'react'

export default function AtlasInput(props) {

const inputRef = useRef()

const onSearchClick =()=>{
    props.doApi(inputRef.current.value)
}
    return (
        <div className='bg-warning p-2'>
            <div className='col-md-6 d-flex'>
                <input ref={inputRef} onKeyDown={(e)=>{
                    if(e.key=="Enter"){
                        props.doApi(inputRef.current.value)
                    }
                }} placeholder='search for state...' className='form-control'/>
                <button onClick={onSearchClick}>search</button>
            </div>
        </div>
    )
}



