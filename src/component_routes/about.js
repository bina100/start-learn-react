import React, {useContext, useEffect} from 'react'
import { AppContext } from '../context/context'

export default function About() {

  useEffect(() => {
    return () => {
      console.log("cleaned up");
    };
  }, []);
  
  const { val } = useContext(AppContext)

  return (
    <div>about {val}</div>
  )
}
