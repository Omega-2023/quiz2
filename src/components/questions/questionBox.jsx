import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BsCalculatorFill, BsFillJournalBookmarkFill } from "react-icons/bs";
import { GiCheckMark } from "react-icons/gi";
import TimingBox from "../timing/timingBox";
import { FaRightLong } from "react-icons/fa6";
import { NextButton } from "./QuestionNavigation";

function QuestionBox({ question, index }) {
  const dispatch = useDispatch();
  const { currentQuestion, answers, questions } = useSelector(
    (state) => state.questions
  );
  const { currentTime } = useSelector((state) => state.time);
  const [time, setTime] = useState(currentTime);
  const [isPaused, setIsPaused] = useState(false);
  const [pausedTime, setPausedTime] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (time === 0) {
      dispatch({
        type: "timeOut",
      });
    }
  }, [time, dispatch]);

  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setTime((prevTime) => {
          if (prevTime > 0) {
            return prevTime - 1;
          } else {
            clearInterval(intervalRef.current);
            return 0;
          }
        });
      }, 1000);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [isPaused]);

  const handlePause = () => {
    setIsPaused(true);
    setPausedTime(time);
  };

  const handleContinue = () => {
    setIsPaused(false);
  };

  const formatTime = (remainingTime) => {
    const hours = Math.floor(remainingTime / 3600);
    const minutes = Math.floor((remainingTime % 3600) / 60);
    const seconds = remainingTime % 60;

    const formattedTime = `${String(hours).padStart(2, "0")}:${String(
      minutes
    ).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

    return formattedTime;
  };

  const handleSelectAnswer = (answer) => {
    dispatch({
      type: "answerQuestion",
      payload: {
        qn: index,
        choice: answer,
      },
    });
  };
  return (
    <>
      {currentQuestion === index + 1 && (
        <div className="w-full py-2 px-4 bg-white h-full overflow-y-auto">
          <div className=" w-full px-2 py-2 flex justify-between items-center">
            <div className=" font-semibold">
              Question: {index + 1} of {questions.length}
            </div>
            <div className=" flex flex-row gap-2">
              <TimingBox
                time={formatTime(time)}
                pause={formatTime(pausedTime)}
              />
              {isPaused ? (
                <button
                  className=" bg-slate-300 px-3 text-[15px]"
                  onClick={() => handleContinue()}
                >
                  PLAY
                </button>
              ) : (
                <button
                  className=" bg-slate-300 px-3 text-[15px]"
                  onClick={() => handlePause()}
                >
                  PAUSE
                </button>
              )}
              <div>
                <BsCalculatorFill size={40} className="text-green-900" />
              </div>
            </div>
          </div>
          <div className=" w-full px-4 py-2 flex justify-end items-center">
            <button className="border-2 shadow-md px-6 text-[15px] gap-1 flex flex-row items-center py-2">
              <BsFillJournalBookmarkFill />
              <span className=" text-[14px]">FLAG</span>
            </button>
          </div>
          <div className=" w-full px-2 mt-5 font-medium text-[16px]">
            {question.question}
          </div>
          <div className="w-full border-b-8 mt-10 border-dotted "></div>

          <div className=" flex flex-col gap-3 py-1 mt-10">
            {question.choices.map((c, i) => (
              <div>
                <label
                  htmlFor={`q-choices-[${index + 2 * i + 1}]`}
                  className="relative flex flex-row items-center gap-3 "
                >
                  <input
                    type="checkbox"
                    className="absolute bg-transparent check-input opacity-0 z-20"
                    name={`q-choices-[${index + 2 * i + 1}]`}
                    id={`q-choices-[${index + 2 * i + 1}]`}
                  />
                  <div className="label h-[0.5cm] w-[0.5cm] rounded-sm cursor-pointer bg-gray-300 border-2 border-gray-400 flex justify-center items-center text-black">
                    <GiCheckMark className="i" />
                  </div>
                  <span>{c}</span>
                </label>
              </div>
            ))}
          </div>
          <NextButton />
        </div>
      )}
    </>
  );
}

export default QuestionBox;
