import React from "react";
import DustbinTableItems from "./DustbinTableItems";

const DustbinTable = () => {
  return (
    <div className="w-full bg-white p-4 md:col-span-3">
      <table className="w-full table">
        <thead className="py-4 border dark:border-none">
          <tr>
            <th className="bg-white dark:bg-gray-800">device mac address</th>
            <th className="bg-white dark:bg-gray-800">contct number</th>
            <th className="bg-white dark:bg-gray-800">total devices</th>
          </tr>
        </thead>
        <tbody>
            <DustbinTableItems/>
            <DustbinTableItems/>
            <DustbinTableItems/>
            <DustbinTableItems/>
            <DustbinTableItems/>
        </tbody>
      </table>
    </div>
  );
};

export default DustbinTable;
