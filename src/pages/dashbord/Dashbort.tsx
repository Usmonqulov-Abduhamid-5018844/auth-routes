import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Dashbort = () => {
  return (
    <div className="flex">
      <div className="dachbort_scrolbar h-[100vh] w-[300px] bg-blue-800 overflow-y-auto ">
        <h1 className="text-[30px] text-center pt-[10px] font-bold text-white/90">
          Admin Dashbord
        </h1>
        <ul className="flex flex-col items-center gap-5 mt-[50px] text-[20px] text-white">
          <li>
            <NavLink
              to="dashboard/users"
              className={({ isActive }) => (isActive ? "bg-amber-300/80 py-[4px] font-bold px-[80px] rounded-[10px]" : "")}
            >
              Users
            </NavLink>
          </li>
          <li>
            <NavLink
              to="dashboard/products"
              className={({ isActive }) => (isActive ? "bg-amber-300/80 py-[4px] font-bold px-[80px] rounded-[10px]" : "")}
            >
              Products
            </NavLink>
          </li>
          <li>
            <NavLink
              to="dashboard/categories"
              className={({ isActive }) => (isActive ? "bg-amber-300/80 py-[4px] font-bold px-[80px] rounded-[10px]" : "")}
            >
              Categories
            </NavLink>
          </li>
          <li>
            <NavLink
              to="dashboard/orders"
              className={({ isActive }) => (isActive ? "bg-amber-300/80 py-[4px] font-bold px-[80px] rounded-[10px]" : "")}
            >
              Orders
            </NavLink>
          </li>
          <li>
            <NavLink
              to="dashboard/reports"
              className={({ isActive }) => (isActive ? "bg-amber-300/80 py-[4px] font-bold px-[80px] rounded-[10px]" : "")}
            >
              Reports
            </NavLink>
          </li>
          <li>
            <NavLink
              to="dashboard/settings"
              className={({ isActive }) => (isActive ? "bg-amber-300/80 py-[4px] font-bold px-[80px] rounded-[10px]" : "")}
            >
              Settings
            </NavLink>
          </li>

        </ul>
      </div>
      <div className="flex-1">
        <header className="h-[80px] bg-blue-800 w-[100%]">
            <h1 className="text-center text-[30px] text-white pt-[10px] font-bold">Header</h1>
        </header>
        <div>
            <Outlet/>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Dashbort);
