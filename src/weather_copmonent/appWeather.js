import React, { useEffect, useState } from 'react'
import WeahterInfo from './weatherInfo'
import WeatherInput from './weatherInput'
import axios from 'axios';

export default function AppWeather() {
  const [infoObj,setInfoObj] = useState({});

  useEffect(() => {
    doApi("חיפה")
  },[])

  const doApi = async(_townName) => {
    let url = `https://api.openweathermap.org/data/3.0/weather?q=${_townName}&appid=4401ad1f3ae09a16e14a8f14bdc08013&units=metric`;
    let resp = await axios.get(url);
    console.log(resp.data);
    setInfoObj(resp.data);
  }

  return (
    <div>
      <WeatherInput doApi={doApi} />
      <WeahterInfo item={infoObj} />
    </div>
  )
}
