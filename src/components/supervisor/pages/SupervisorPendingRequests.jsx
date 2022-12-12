import React from "react";
import Sidebar from "../others/Sidebar";

const SupervisorPendingRequests = () => {
  return (
    <section className="min-h-screen w-screen flex">
      {/* sidebar  */}
      <Sidebar navigation={'pendingRequests'} />
      {/* main dashboard  */}
      <section className="w-full min-h-screen bg-blue-50 dark:bg-gray-900 px-4">
      <div className="py-2 px-6 mt-6 border-b-2 border-gray-300 dark:border-gray-700">
          <p className="text-2xl text-gray-700 dark:text-gray-400 font-light">Pending Requests</p>
        </div>
      </section>
    </section>
  );
};

export default SupervisorPendingRequests;
