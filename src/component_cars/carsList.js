import axios from 'axios'
import { async } from 'q'
import React, { useEffect, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { useSearchParams } from 'react-router-dom'
import CarItem from './carItem'

export default function CarsList() {

    const nav = useNavigate()
    const [ar, setAr] = useState([])
    const inputRef = useRef()
const [query] = useSearchParams()
    useEffect(()=>{
        doApi()
    }, [query.get("s")])

    const doApi = async()=>{
        let searchQ = query.get("s") || "jeep"
        let url ="https://cars-otdf.onrender.com/cars/search?s="+searchQ
            let resp =await axios.get(url)
            console.log(resp.data)
            setAr(resp.data)
       
    }
  return (
    <div className='container'>
        <div className='col-md-4 p-3'>
            <input ref={inputRef} onKeyDown={(e)=>{
                if(e.key == "Enter"){
                    nav("/cars/?s="+inputRef.current.value)
                }
            }} className='form-control' placeholder='search for pics...'/>
        </div>
        <h2>Search for: {query.get("s")}</h2>
        <div className='row g-4'>
            {
                ar.map(item=>{
                    return(
                        <CarItem key={item.id} item={item}/>
                    )
                })
            }
        </div>
    </div>
  )
}
