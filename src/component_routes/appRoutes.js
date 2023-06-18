import React, { useState } from 'react'
import {BrowserRouter,Routes,Route , Link} from "react-router-dom"
import CarsList from '../component_cars/carsList'
import AppPixa from '../component_pixa/appPixa'
import About from './about'
import Home from './home'
import {AppContext} from "../context/context"
import Counter from './counter'
import VipList from '../component_hm/vipList'
import AppAtlas from '../component_hm/appAtlas'
import AppCasino from '../component_casino/appCasino'

export default function AppRoutes() {
  const [number,setNumber] = useState(3);
  const [coins,setCoins] = useState(5);


  return (
    <BrowserRouter>

      <AppContext.Provider value={{
        val:"koko2",
        number,setNumber,
        coins,setCoins
        }}>

      <header className='p-2 container bg-warning'>
        {/* <div className='float-end h5'>Coins:</div>  */}
        <Link to="/">Home</Link> |
        <Link to="/about">About</Link> |
        <Link to="/counter">Counter</Link> |
        <Link to="/vip">Vip</Link> |
        <Link to="/atlas">Atlas</Link> |
        <Link to="/pixa/cats">Pixa</Link> |
        <Link to="/cars">Cars</Link> |
        <Link to="/casino">Casino</Link>
      </header>
        {/* outlet */}
        <Routes>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/vip" element={<VipList />} />
          <Route path="/atlas" element={<AppAtlas />} />
          <Route path="/pixa/:searchQ" element={<AppPixa />} />
          <Route path="/casino" element={<AppCasino />} />
          {/* ?s= */}
          <Route path="/cars" element={<CarsList />} />
        </Routes>
        {/* outlet */}
      <footer className='p-2 container bg-danger'>footer</footer>
      </AppContext.Provider>
    </BrowserRouter>
  )
}