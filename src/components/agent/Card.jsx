import React from "react";
import { AiOutlineArrowUp } from 'react-icons/ai';

const Card = (props) => {
  return (
    <div className="w-full md:w-[30%] mb-4 lg:mb-0 h-44 bg-base-100 shadow-xl grid place-items-center p-6">
        <p className="text-xs place-self-start text-gray-600">{props.title}</p>
        <div className="place-self-start h-16 w-full flex justify-between items-center">
            <div className="flex items-center space-x-2 font-light">
            <AiOutlineArrowUp className="text-4xl text-info"/>
            <p className="text-2xl">{props.value}</p>
            </div>
            <p className="text-gray-500 font-light text-sm">{props.progressValue}%</p>
        </div>
        <progress className="progress progress-info w-full place-self-start shadow-lg shadow-gray-500" value={props.progressValue} max="100"></progress>
    </div>
  );
};

export default Card;
