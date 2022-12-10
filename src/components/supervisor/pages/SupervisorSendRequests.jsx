import React from "react";
import Sidebar from "../others/Sidebar";

const SupervisorSendRequests = () => {
  return (
    <section className="min-h-screen w-screen flex">
      {/* sidebar  */}
      <Sidebar navigation={'sendRequests'} />
      {/* main dashboard  */}
      <section className="w-full min-h-screen bg-blue-50 dark:bg-gray-900">
      <div className="py-2 px-6 mt-6 border-b-2 border-gray-300">
          <p className="text-2xl text-gray-700 font-light">Send Requests</p>
        </div>
      </section>
    </section>
  );
};

export default SupervisorSendRequests;
