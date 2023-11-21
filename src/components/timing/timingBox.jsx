import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

function TimingBox({time, pause}) {
  
  return (
    <div className=" flex flex-col text-[15px] items-end">
      <p className=" flex flex-row gap-1">
        <span className=" font-bold">Time Remaining:</span>
        <span>{time}</span>
      </p>
      <p className=" flex flex-row gap-1">
        <span className=" font-bold">Paused Remaining:</span>
        <span>{pause}</span>
      </p>
   
    </div>
  );
}

export default TimingBox;
