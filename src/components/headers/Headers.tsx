import React from 'react'
import { NavLink } from 'react-router-dom'

const Headers = () => {
  return (
    <div className='px-[100px] justify-between h-[50px] flex items-center gap-10 font-bold text-white bg-blue-700'>
      <div className='flex gap-10'>
        <NavLink className={({isActive})=> (isActive ? "underline text-[17px] text-white/80": "")} to={"home"}>Home</NavLink>
        <NavLink className={({isActive})=> (isActive ? "underline text-[17px] text-white/80": "")}  to={"about"}>About</NavLink>
        <NavLink className={({isActive})=> (isActive ? "underline text-[17px] text-white/80": "")} to={"product"}>Product</NavLink>
        <NavLink className={({isActive})=> (isActive ? "underline text-[17px] text-white/80": "")} to={"contact"}>Contact</NavLink>
        <NavLink className={({isActive})=> (isActive ? "underline text-[17px] text-white/80": "")} to={"support"}>Support</NavLink>
      </div>
      <div className='flex gap-10'>
      <NavLink to={"login"}>Login</NavLink>
      <NavLink to={"Dashbord"}>Dashbort</NavLink>
      </div>
    </div>
  )
}

export default React.memo(Headers)
