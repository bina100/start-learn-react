import axios from 'axios'
import { async } from 'q'
import React, { useEffect, useState } from 'react'
import TvItem from './tvItem'

export default function AppTv() {
    const [ar, setAr] = useState([])

    useEffect(()=>{
        doApi()
    },[])

    const doApi=async()=>{
        let url = "http://fs1.co.il/bus/tv.php"
        try{
            let resp = await axios.get(url)
            console.log(resp.data)
            setAr(resp.data)
        }catch(err){
            console.log(err)
        }
    }
  return (
    <div>
        <h1>List of TV:</h1>
        <div className='row g-3'>
            {ar.map(item=>{
                return(
                    <TvItem key={item.name} item={item}/>
                )
            })}
        </div>
    </div>
  )
}

