import React from "react";
import Navbar from "../navbar/Navbar";
import Sidebar from "../navbar/Sidebar";
import OrganizationHomePage from "./OrganizationHomePage";

const Organization = () => {
  return (
    <section className="drawer">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <Navbar />
        <OrganizationHomePage/>
      </div>
      <Sidebar />
    </section>
  );
};

export default Organization;
