import React from "react";
import Card from "./Card";

const Agent = () => {
  return (
    <section className="min-h-screen w-screen flex">
      {/* sidebar  */}
      <section className="min-h-screen hidden md:block z-10 w-80 bg-slate-600 shadow-2xl shadow-slate-600"></section>
      {/* main dashboard  */}
      <section className="w-full min-h-screen bg-blue-50">
        <div className="flex flex-col md:flex-row justify-evenly items-center py-3">
          <Card
            value={123.56}
            progressValue={50}
            title={"Dustbins: Available volume"}
          />
          <Card
            value={203.56}
            progressValue={70}
            title={"Smarttoilets total Available for users"}
          />
          <Card
            value={409.56}
            progressValue={30}
            title={"Waterpoint: Availalble water"}
          />
        </div>
        <div className="tabs px-6 pt-6">
          <a className="tab tab-lifted">Tab 1</a>
          <a className="tab tab-lifted tab-active">Tab 2</a>
          <a className="tab tab-lifted">Tab 3</a>
        </div>
        <div className="px-6">
        <div className="overflow-x-auto">
  <table className="w-full">
    {/* <!-- head --> */}
    <thead className="py-4 border">
      <tr>
        <th>User</th>
        <th>Activity</th>
        <th>Time</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
    <tr className="hover">
        <th>2</th>
        <td>Hart Hagerty</td>
        <td>Desktop Support Technician</td>
        <td>Purple</td>
      </tr>      
      <tr className="hover">
        <th>2</th>
        <td>Hart Hagerty</td>
        <td>Desktop Support Technician</td>
        <td>Purple</td>
      </tr>      
      <tr className="hover">
        <th>2</th>
        <td>Hart Hagerty</td>
        <td>Desktop Support Technician</td>
        <td>Purple</td>
      </tr>
    </tbody>
  </table>
</div>
        </div>
      </section>
    </section>
  );
};

export default Agent;
