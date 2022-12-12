import React from "react";
import DustbinTableItems from "./DustbinTableItems";

const DustbinTable = () => {
  return (
    <div className="w-full bg-white dark:bg-gray-900 p-4 md:col-span-3">
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
            <DustbinTableItems id={'1'} mac_address={'12:456:78'} location={'23.236,65.264'} status={'active'} />
            <DustbinTableItems id={'11'} mac_address={'12:456:78'} location={'23.236,65.264'} status={'deactive'}/>
            <DustbinTableItems id={'21'} mac_address={'12:456:78'} location={'23.236,65.264'} status={'active'}/>
            <DustbinTableItems id={'13'} mac_address={'12:456:78'} location={'23.236,65.264'} status={'deactive'}/>
            <DustbinTableItems id={'14'} mac_address={'12:456:78'} location={'23.236,65.264'} status={'deactive'}/>
        </tbody>
      </table>
    </div>
  );
};

export default DustbinTable;
