import React from "react";
import {
  AiOutlineHome,
  AiOutlinePoweroff,
  AiOutlineRight,
  AiOutlineStock,
} from "react-icons/ai";
import { HiOutlineCube, HiOutlineNewspaper } from "react-icons/hi";

const Sidebar = () => {
  return (
      <section className="min-h-screen hidden md:block z-10 w-80 bg-slate-600 shadow-2xl shadow-slate-600 p-6">
        <div className="flex items-center">
          <AiOutlineStock className="text-white text-3xl rounded-md bg-gradient-to-tr from-info to-green-300" />
          <p className="ml-2 text-lg text-gray-300 font-extralight">Agents</p>
        </div>
        {/* navigation  */}
        <div className="mt-12">
          <p className="uppercase text-[10.5px] font-semibold text-gray-100">
            navigation
          </p>
          <div className="mt-7 flex items-center text-slate-300 font-light hover:text-cyan-400 transition-all delay-150 cursor-pointer">
            <AiOutlineHome className="text-xl" />
            <p className="ml-4 text-sm">Dashboard</p>
          </div>
        </div>
        {/* connections  */}
        <div className="mt-12">
          <p className="uppercase text-[10.5px] font-semibold text-gray-100">
            connections
          </p>
          <div className="mt-7 flex items-center text-slate-300 font-light hover:text-cyan-400 transition-all delay-150 cursor-pointer">
            <HiOutlineCube className="text-xl" />
            <p className="ml-4 text-sm">Componented People</p>
            <AiOutlineRight className="text-xs ml-4" />
          </div>
          <div className="mt-4 p-4 bg-slate-700 text-slate-300 cursor-pointer transition-all delay-150 text-sm hover:text-cyan-500">
            <p className="">Devices</p>
          </div>
        </div>
        {/*  approvals */}
        <div className="mt-8">
          <p className="uppercase text-[10.5px] font-semibold text-gray-100">
            approvals
          </p>
          <div className="mt-7 flex items-center text-slate-300 font-light hover:text-cyan-400 transition-all delay-150 cursor-pointer">
            <HiOutlineNewspaper className="text-xl" />
            <p className="ml-4 text-sm">Send Requests</p>
          </div>
          <div className="mt-7 flex items-center text-slate-300 font-light hover:text-cyan-400 transition-all delay-150 cursor-pointer">
            <AiOutlinePoweroff className="text-xl" />
            <p className="ml-4 text-sm">Logout</p>
          </div>
        </div>
      </section>
  );
};

export default Sidebar;
