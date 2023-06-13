import React, { useRef } from 'react'

export default function WeatherInput(props) {

  const inputRef = useRef();

  return (
    <div className='container-fluid bg-warning p-2'>
      <nav className="container">
        <div className='col-md-4 d-flex'>
          <input ref={inputRef} type="text" className='form-control' placeholder='search for city/town...' />
          <button onClick={() => {
            props.doApi(inputRef.current.value);
          }} className='btn btn-success'>Search</button>
        </div>
      </nav>
    </div>
  )
}