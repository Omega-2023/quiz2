import { IoCloseCircleSharp } from "react-icons/io5";
import Timimg from "../timing/timingBox.jsx";
import Logo from '../../assets/images/lg-removebg-preview.png'
import {} from 'react-icons'

function QuestionHeader() {
  return (
    <div className="h-[2.5cm] border-b-2 border-blue-600 bg-white w-full flex flex-row justify-between items-center px-10">
     <div className="h-full w-[3cm] flex justify-center items-center">
      <img src={Logo} className=" w-full h-[1.6cm]"/>
     </div>
    <div className=" text-gray-600 font-medium">
      Assessment : Custom : Custom : ATISecure-Demo-Test
    </div>
    <button className=" flex flex-row gap-1 items-center">
    <IoCloseCircleSharp size={21} />
      <span>CLOSE</span>
    </button>
    </div>
  );
}

export default QuestionHeader;
