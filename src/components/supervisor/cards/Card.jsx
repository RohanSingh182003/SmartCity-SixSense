import React from "react";
import { BsArrowDown, BsArrowUp } from "react-icons/bs";
import DecrementProgress from "./progress/DecrementProgress";
import IncrementProgress from "./progress/IncrementProgress";

const Card = (props) => {
  return (
    <div className="w-full md:w-[30%] mb-4 lg:mb-0 h-44 bg-base-100 shadow-xl grid place-items-center p-6">
      <p className="text-xs place-self-start text-gray-600 dark:text-gray-400">{props.title}</p>
      <div className="place-self-start h-16 w-full flex justify-between items-center">
        <div className="flex items-center space-x-2 font-light">
          {props.status.toLowerCase() === "increment" ? (
            <BsArrowUp className="text-4xl text-info" />
          ) : (
            <BsArrowDown className="text-4xl text-error" />
          )}
          <p className="text-2xl">{props.value}</p>
        </div>
        <p className="text-gray-500 dark:text-gray-400 font-light text-sm">
          {props.progressValue}%
        </p>
      </div>
      {props.status.toLowerCase() === "increment" ? <IncrementProgress value={props?.progressValue} /> : <DecrementProgress value={props?.progressValue} />}
    </div>
  );
};

export default Card;
