import React from "react";

const DeviceSidebar = ({
  dustbin,
  setDustbin,
  toilets,
  setToilets,
  waterPoints,
  setWaterPoints,
}) => {
  return (
    <div className="min-h-full w-64">
      <div
        onClick={() => {
          setDustbin(true);
          setToilets(false);
          setWaterPoints(false);
        }}
        className={`p-4 cursor-pointer ${
          dustbin ? "bg-white dark:bg-gray-800 dark:rounded-md" : "font-light hover:text-info"
        }`}
      >
        <p>Dustbines</p>
      </div>
      <div
        onClick={() => {
          setDustbin(false);
          setToilets(true);
          setWaterPoints(false);
        }}
        className={`p-4 cursor-pointer ${
          toilets ? "bg-white dark:bg-gray-800 dark:rounded-md" : "font-light hover:text-info"
        }`}
      >
        <p>Smarttoilets</p>
      </div>
      <div
        onClick={() => {
          setDustbin(false);
          setToilets(false);
          setWaterPoints(true);
        }}
        className={`p-4 cursor-pointer ${
          waterPoints ? "bg-white dark:bg-gray-800 dark:rounded-md" : "font-light hover:text-info"
        }`}
      >
        <p>Waterpoints</p>
      </div>
    </div>
  );
};

export default DeviceSidebar;
