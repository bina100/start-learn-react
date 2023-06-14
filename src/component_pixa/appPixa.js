import axios from 'axios'
import { async } from 'q'
import React, { useEffect, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import PixaItem from './pixaItem'

export default function AppPixa() {
    const params = useParams()

    const nav = useNavigate()
    const [ar, setAr] = useState([])
    const inputRef = useRef()

    useEffect(()=>{
        doApi()
    }, [params["searchQ"]])

    const doApi = async()=>{
        let url =`https://pixabay.com/api/?key=35521761-1e98ea3e976c86dd79f5f0de7&q=${params["searchQ"]}&image_type=photo&pretty=true`
        try{
            let resp = axios.get(url)
            console.log(resp.data)
            setAr(resp.data.hits)
        }catch(err){
            console.log(err)
        }
    }
  return (
    <div className='container'>
        <div className='col-md-4 p-3'>
            <input ref={inputRef} onKeyDown={(e)=>{
                if(e.key == "Enter"){
                    nav("/pixa/"+inputRef.current.value)
                }
            }} className='form-control' placeholder='search for pics...'/>
        </div>
        <h2>Search for: {params["searchQ"]}</h2>
        <div className='row g-4'>
            {
                ar.map(item=>{
                    return(
                        <PixaItem key={item.id} item={item}/>
                    )
                })
            }
        </div>
    </div>
  )
}
