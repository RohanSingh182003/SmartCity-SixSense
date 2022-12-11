import React from "react";
import SmartToiletTableItems from "./SmartToiletTableItems";

const SmartToiletTable = () => {
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
          <SmartToiletTableItems id={'101'} mac_address={'12:456:78'} location={'23.236,65.264'} status={'active'} />
          <SmartToiletTableItems id={'103'} mac_address={'12:456:78'} location={'23.236,65.264'} status={'active'} />
          <SmartToiletTableItems id={'1658'} mac_address={'12:456:78'} location={'23.236,65.264'} status={'deactive'} />
          <SmartToiletTableItems id={'71'} mac_address={'12:456:78'} location={'23.236,65.264'} status={'active'} />
          <SmartToiletTableItems id={'198'} mac_address={'12:456:78'} location={'23.236,65.264'} status={'deactive'} />
          <SmartToiletTableItems id={'551'} mac_address={'12:456:78'} location={'23.236,65.264'} status={'deactive'} />
          <SmartToiletTableItems id={'103'} mac_address={'12:456:78'} location={'23.236,65.264'} status={'active'} />
        </tbody>
      </table>
    </div>
  );
};

export default SmartToiletTable;
