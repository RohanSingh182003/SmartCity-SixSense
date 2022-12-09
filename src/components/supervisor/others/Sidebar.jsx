import React from "react";
import {
  AiOutlinePoweroff,
  AiOutlinePullRequest,
  AiOutlineStock,
} from "react-icons/ai";
import {
  MdOutlineDeviceHub,
  MdOutlineSpaceDashboard,
  MdPendingActions,
  MdSupportAgent,
} from "react-icons/md";
import { Link } from "react-router-dom";

const Sidebar = (props) => {
  return (
    <section className="min-h-screen hidden md:block z-10 w-80 bg-slate-600 shadow-2xl shadow-slate-600 p-6">
      <div className="flex items-center">
        <AiOutlineStock className="text-white text-3xl rounded-md bg-gradient-to-tr from-info to-green-300" />
        <p className="ml-2 text-lg text-gray-300 font-extralight">Supervisor</p>
      </div>
      {/* navigation  */}
      <div className="mt-12">
        <p className="uppercase text-[10.5px] font-semibold text-gray-100 mb-2">
          navigation
        </p>
        <Link to={'/supervisor/dashboard'} className={`py-4 px-2 ${
            props.navigation === "dashboard"
              ? "bg-gray-700"
              : "hover:text-cyan-400"
          } flex items-center text-slate-300 font-light transition-all delay-150 cursor-pointer`}
        >
          <MdOutlineSpaceDashboard className="text-xl" />
          <p className="ml-4 text-sm">Dashboard</p>
        </Link>
        <Link to={'/supervisor/devices'} className={`py-4 px-2 ${
            props.navigation === "devices"
              ? "bg-gray-700"
              : "hover:text-cyan-400"
          } flex items-center text-slate-300 font-light transition-all delay-150 cursor-pointer`}>
          <MdOutlineDeviceHub className="text-xl" />
          <p className="ml-4 text-sm">Devices</p>
        </Link>
        <Link to={'/supervisor/agents'} className={`py-4 px-2 ${
            props.navigation === "agents"
              ? "bg-gray-700"
              : "hover:text-cyan-400"
          } flex items-center text-slate-300 font-light transition-all delay-150 cursor-pointer`}>
          <MdSupportAgent className="text-xl" />
          <p className="ml-4 text-sm">Agents</p>
        </Link>
      </div>
      {/*  requests */}
      <div className="mt-8">
        <p className="uppercase text-[10.5px] font-semibold text-gray-100 mb-2">
          requests
        </p>
        <Link to={'/supervisor/sendRequests'} className={`py-4 px-2 ${
            props.navigation === "sendRequests"
              ? "bg-gray-700"
              : "hover:text-cyan-400"
          } flex items-center text-slate-300 font-light transition-all delay-150 cursor-pointer`}>
          <AiOutlinePullRequest className="text-xl" />
          <p className="ml-4 text-sm">Send Requests</p>
        </Link>
        <Link to={'/supervisor/pendingRequests'} className={`py-4 px-2 ${
            props.navigation === "pendingRequests"
              ? "bg-gray-700"
              : "hover:text-cyan-400"
          } flex items-center text-slate-300 font-light transition-all delay-150 cursor-pointer`}>
          <MdPendingActions className="text-xl" />
          <p className="ml-4 text-sm">Pending Requests</p>
        </Link>
        <div className="py-4 px-2 flex items-center text-slate-300 font-light transition-all delay-150 cursor-pointer">
          <AiOutlinePoweroff className="text-xl" />
          <p className="ml-4 text-sm">Logout</p>
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
