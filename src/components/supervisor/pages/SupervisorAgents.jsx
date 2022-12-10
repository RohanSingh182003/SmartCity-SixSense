import React from "react";
import Sidebar from "../others/Sidebar";

const SupervisorAgents = () => {
  return (
    <section className="min-h-screen w-screen flex">
      {/* sidebar  */}
      <Sidebar navigation={'agents'} />
      {/* main dashboard  */}
      <section className="w-full min-h-screen bg-blue-50 dark:bg-gray-900">
      </section>
    </section>
  );
};

export default SupervisorAgents;
