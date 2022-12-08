import React from "react";

const DecrementProgress = (props) => {
  return (
    <div className="h-2 w-full bg-gray-200">
      <div
        style={{ width: props.value + "%" }}
        className="h-full bg-gradient-to-r from-purple-500 to-violet-300 shadow-lg shadow-gray-500"
      ></div>
    </div>
  );
};

export default DecrementProgress;
