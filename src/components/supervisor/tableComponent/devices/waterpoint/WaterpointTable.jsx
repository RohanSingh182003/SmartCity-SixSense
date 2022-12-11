import React from "react";
import WaterpointTableItems from "./WaterpointTableItems";

const WaterpointTable = () => {
  return (
    <div className="w-full bg-white p-4 md:col-span-3">
      <table className="w-full table">
        <thead className="py-4 border dark:border-none">
          <tr>
            <th className="bg-white dark:bg-gray-800">device id</th>
            <th className="bg-white dark:bg-gray-800">mac address</th>
            <th className="bg-white dark:bg-gray-800">location(Lat,Lng)</th>
            <th className="bg-white dark:bg-gray-800">status</th>
          </tr>
        </thead>
        <tbody>
          <WaterpointTableItems
            id={"1"}
            mac_address={"12:456:78"}
            location={"23.236,65.264"}
            status={"active"}
          />
          <WaterpointTableItems
            id={"001"}
            mac_address={"12:456:78"}
            location={"23.236,65.264"}
            status={"deactive"}
          />
          <WaterpointTableItems
            id={"169"}
            mac_address={"12:456:78"}
            location={"23.236,65.264"}
            status={"deactive"}
          />
          <WaterpointTableItems
            id={"471"}
            mac_address={"12:456:78"}
            location={"23.236,65.264"}
            status={"active"}
          />
          <WaterpointTableItems
            id={"361"}
            mac_address={"12:456:78"}
            location={"23.236,65.264"}
            status={"active"}
          />
        </tbody>
      </table>
    </div>
  );
};

export default WaterpointTable;
