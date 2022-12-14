import React, { useState } from "react";
import Card from "../cards/Card";
import Sidebar from "../others/Sidebar";
import Today from "../tableComponent/Today";
import ThisWeek from "../tableComponent/ThisWeek";
import All from "../tableComponent/All";

const SupervisorDashboard = () => {
  const [firstTab, setFirstTab] = useState(true);
  const [secondTab, setSecondTab] = useState(false);
  const [thirdTab, setThirdTab] = useState(false);
  return (
    <section className="min-h-screen w-screen flex">
      {/* sidebar  */}
      <Sidebar navigation={'dashboard'} />
      {/* main dashboard  */}
      <section className="w-full min-h-screen bg-blue-50 dark:bg-gray-900">
        {/* top cards  */}
        <div className="flex flex-col md:flex-row justify-evenly items-center pt-8 pb-3">
          <Card
            value={123.56}
            progressValue={67}
            title={"Dustbins: Available volume"}
            status={'increment'}
          />
          <Card
            value={203.56}
            progressValue={37}
            title={"Smarttoilets total Available for users"}
            status={'decrement'}
          />
          <Card
            value={409.56}
            progressValue={80}
            title={"Waterpoint: Availalble water"}
            status={'increment'}
          />
        </div>
        {/* suffle tabs  */}
        <div className="tabs px-6 pt-6">
          <a
            onClick={() => {
              setFirstTab(true);
              setSecondTab(false);
              setThirdTab(false);
            }}
            className={`tab tab-lifted ${firstTab ? 'tab-active' : 'hover:text-info dark:hover:text-cyan-600'}`}
          >
            Today
          </a>
          <a
            onClick={() => {
              setFirstTab(false);
              setSecondTab(true);
              setThirdTab(false);
            }}
            className={`tab tab-lifted ${secondTab ? 'tab-active' : 'hover:text-info dark:hover:text-cyan-600'}`}
          >
            This Week
          </a>
          <a
            onClick={() => {
              setFirstTab(false);
              setSecondTab(false);
              setThirdTab(true);
            }}
            className={`tab tab-lifted ${thirdTab ? 'tab-active' : 'hover:text-info dark:hover:text-cyan-600'}`}
          >
            All
          </a>
        </div>
        <div className="px-6">
          <div className="overflow-x-auto shadow-xl">
            {firstTab && <Today />}
            {secondTab && <ThisWeek />}
            {thirdTab && <All />}
          </div>
        </div>
      </section>
    </section>
  );
};

export default SupervisorDashboard;
