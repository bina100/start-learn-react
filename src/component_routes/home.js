import React,{useContext} from 'react'
import { AppContext } from '../context/context'
export default function Home() {
  const { number } = useContext(AppContext)

  return (
    <div>home number: {number}</div>

  )
}
