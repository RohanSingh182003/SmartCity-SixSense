import React, { useState } from "react";
import DeviceSidebar from "../others/DeviceSidebar";
import Sidebar from "../others/Sidebar";
import DustbinTable from "../tableComponent/devices/dustbin/DustbinTable";
import SmartToiletTable from '../tableComponent/devices/smarttoilet/SmartToiletTable'
import WaterpointTable from '../tableComponent/devices/waterpoint/WaterpointTable'

const SupervisorDevices = () => {
  const [dustbin, setDustbin] = useState(true);
  const [toilets, setToilets] = useState(false);
  const [waterPoints, setWaterPoints] = useState(false);
  return (
    <section className="min-h-screen w-screen flex">
      {/* sidebar  */}
      <Sidebar navigation={"devices"} />
      {/* main dashboard  */}
      <section className="w-full min-h-screen bg-blue-50 dark:bg-gray-900 px-4">
        <div className="py-2 px-6 mt-6 border-b-2 border-gray-300 dark:border-gray-700">
          <p className="text-2xl text-gray-700 dark:text-gray-400 font-light">Devices</p>
        </div>
        {/* sub dashboard wrapper */}
        <div className="grid grid-cols-4 mt-4">
            <DeviceSidebar
            dustbin={dustbin}
              setDustbin={setDustbin}
              toilets={toilets}
              setToilets={setToilets}
              waterPoints={waterPoints}
              setWaterPoints={setWaterPoints}
            />
          {dustbin && <DustbinTable/>}
          {toilets && <SmartToiletTable/>}
          {waterPoints && <WaterpointTable/>}
        </div>
      </section>
    </section>
  );
};

export default SupervisorDevices;
