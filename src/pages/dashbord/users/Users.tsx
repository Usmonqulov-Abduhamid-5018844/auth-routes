import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Users = () => {
  return (
    <div className='flex-1 overflow-x-auto'>
      <div className='flex gap-10 mt-[20px] ml-[20px] font-bold text-[17px]'>
      <NavLink end={true} className={({isActive})=> (isActive ? "underline" : "")} to={""}>ActiveUsers</NavLink>
      <NavLink className={({isActive})=> (isActive ? "underline" : "")} to={"activeUsers-2"}>Lorem</NavLink>
      <NavLink className={({isActive})=> (isActive ? "underline" : "")} to={"activeUsers-3"}>Teacher</NavLink>
      <NavLink className={({isActive})=> (isActive ? "underline" : "")} to={"activeUsers-4"}>asdfg</NavLink>
      <NavLink className={({isActive})=> (isActive ? "underline" : "")} to={"activeUsers-5"}>Activsdvfdve</NavLink>
      </div>

      <Outlet/>
    </div>
  )
}

export default React.memo(Users)
