import React, { useState } from "react";
import AgentSidebar from "../others/AgentSidebar";
import Sidebar from "../others/Sidebar";
import ActiveAgentsTable from "../tableComponent/agents/active-agents/ActiveAgentsTable";
import AllAgentsTable from "../tableComponent/agents/all-agents/AllAgentsTable";
import DeactiveAgentsTable from "../tableComponent/agents/deactive-agents/DeactiveAgentsTable";

const SupervisorAgents = () => {
  const [all, setAll] = useState(true)
  const [active, setActive] = useState(false)
  const [deactive, setDeactive] = useState(false)
  return (
    <section className="min-h-screen w-screen flex">
      {/* sidebar  */}
      <Sidebar navigation={"agents"} />
      {/* main dashboard  */}
      <section className="w-full min-h-screen bg-blue-50 dark:bg-gray-900 px-4">
        <div className="py-2 px-6 mt-6 border-b-2 border-gray-300 dark:border-gray-700">
          <p className="text-2xl text-gray-700 dark:text-gray-400 font-light">Agents</p>
        </div>
        {/* sub dashboard wrapper */}
        <div className="grid grid-cols-4 mt-4">
          <AgentSidebar
            all={all}
            setAll={setAll}
            active={active}
            setActive={setActive}
            deactive={deactive}
            setDeactive={setDeactive}
          />
          {all && <AllAgentsTable/>}
          {active && <ActiveAgentsTable/>}
          {deactive && <DeactiveAgentsTable/>}
        </div>
      </section>
    </section>
  );
};

export default SupervisorAgents;
