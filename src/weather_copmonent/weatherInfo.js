import React from 'react'

export default function WeahterInfo(props) {
  let item = props.item

  return (
    <div className='container text-center'>
      {(item.name) ? 
      <div>
        <h1>Weather app</h1>
        <h2>Weather of: {item.name}</h2>
        <img src={`http://openweathermap.org/img/w/${item.weather[0].icon}.png`} width="150" alt="icon" />
        <div>condition:{item.weather[0].description}</div>
        <div>Temp:{item.main?.temp} </div>
        <div>Wind speed: {item.wind?.speed} kmh</div>
      </div> : <h3>Loading...</h3>}
    </div>
  )
}