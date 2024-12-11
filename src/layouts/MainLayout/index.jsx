import React from "react";
import { Outlet } from "react-router-dom";
import { MdHdrAuto } from "react-icons/md";
import { HiOutlineHome } from "react-icons/hi2";
import { GrAppsRounded } from "react-icons/gr";
import { BsLightningCharge } from "react-icons/bs";
import { BiSolidLayer } from "react-icons/bi";
import { MdOutlinePlace } from "react-icons/md";
import { BiSolidCity } from "react-icons/bi";
import { IoCarSport } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import authStore from "../../store/auth.store"

const MainLayout = () => {
  return (
    <div className="flex h-screen">
      <div className="max-w-[200px] w-full flex flex-col bg-[#001529]">
        <ul className="flex justify-center items-center h-[84px]">
          <li>
            <MdHdrAuto color="#fff" size={40} />
          </li>
        </ul>
        <ul className="text-white flex flex-col gap-5 px-4">
          <li className="cursor-pointer hover:hover:scale-110 duration-700 ease-in-out">
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                isActive
                  ? "flex gap-3 py-2 px-4 rounded-lg items-center cursor-pointer bg-[#1677ff]"
                  : "flex gap-3 py-2 px-4 rounded-lg items-center cursor-pointer bg-[#001529]"
              }
            >
              <HiOutlineHome />
              Dashboard
            </NavLink>
          </li>
          <li className="cursor-pointer hover:hover:scale-110 duration-700 ease-in-out">
            <NavLink
              to="/categories"
              className={({ isActive }) =>
                isActive
                  ? "flex gap-3 py-2 px-4 rounded-lg items-center cursor-pointer bg-[#1677ff]"
                  : "flex gap-3 py-2 px-4 rounded-lg items-center cursor-pointer bg-[#001529]"
              }
            >
              <GrAppsRounded />
              Categories
            </NavLink>
          </li>
          <li className="cursor-pointer hover:hover:scale-110 duration-700 ease-in-out">
            <NavLink
              to="/brands"
              className={({ isActive }) =>
                isActive
                  ? "flex gap-3 py-2 px-4 rounded-lg items-center cursor-pointer bg-[#1677ff]"
                  : "flex gap-3 py-2 px-4 rounded-lg items-center cursor-pointer bg-[#001529]"
              }
            >
              <BsLightningCharge />
              Brands
            </NavLink>
          </li>
          <li className="cursor-pointer hover:hover:scale-110 duration-700 ease-in-out">
            <NavLink
              to="/models"
              className={({ isActive }) =>
                isActive
                  ? "flex gap-3 py-2 px-4 rounded-lg items-center cursor-pointer bg-[#1677ff]"
                  : "flex gap-3 py-2 px-4 rounded-lg items-center cursor-pointer bg-[#001529]"
              }
            >
              <BiSolidLayer />
              Models
            </NavLink>
          </li>
          <li className="cursor-pointer hover:hover:scale-110 duration-700 ease-in-out">
            <NavLink
              to="/places"
              className={({ isActive }) =>
                isActive
                  ? "flex gap-3 py-2 px-4 rounded-lg items-center cursor-pointer bg-[#1677ff]"
                  : "flex gap-3 py-2 px-4 rounded-lg items-center cursor-pointer bg-[#001529]"
              }
            >
              <MdOutlinePlace />
              Places
            </NavLink>
          </li>
          <li className="cursor-pointer hover:hover:scale-110 duration-700 ease-in-out">
            <NavLink
              to="/cities"
              className={({ isActive }) =>
                isActive
                  ? "flex gap-3 py-2 px-4 rounded-lg items-center cursor-pointer bg-[#1677ff]"
                  : "flex gap-3 py-2 px-4 rounded-lg items-center cursor-pointer bg-[#001529]"
              }
            >
              <BiSolidCity />
              Cities
            </NavLink>
          </li>
          <li className="cursor-pointer hover:hover:scale-110 duration-700 ease-in-out">
            <NavLink
              to="/cars"
              className={({ isActive }) =>
                isActive
                  ? "flex gap-3 py-2 px-4 rounded-lg items-center cursor-pointer bg-[#1677ff]"
                  : "flex gap-3 py-2 px-4 rounded-lg items-center cursor-pointer bg-[#001529]"
              }
            >
              <IoCarSport />
              Cars
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex flex-col w-full">
        <div className="flex justify-end p-5 w-full bg-[#001529]">
          <button onClick={()=>authStore.logout()} className="bg-white py-[10px] px-[15px] rounded-lg">
            Chiqish
          </button>
        </div>
        <div className="h-screen">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
