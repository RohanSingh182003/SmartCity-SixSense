import React from "react";
import Sidebar from "../others/Sidebar";

const SupervisorSendRequests = () => {
  return (
    <section className="min-h-screen w-screen flex">
      {/* sidebar  */}
      <Sidebar navigation={'sendRequests'} />
      {/* main dashboard  */}
      <section className="w-full min-h-screen bg-blue-50">
      </section>
    </section>
  );
};

export default SupervisorSendRequests;
