import React, { useEffect, useState } from "react";
import { FaRightLong } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";

function QuestionNavigation() {
  return (
    <div className="w-full bg-white border-t-2 h-[1.2cm] fixed bottom-0 left-0 flex flex-row justify-center gap-3 px-3 items-center text-gray-500">
      Copyright @ 2018 Assessment Technologies Institute, LLC. All Rights
      reserved.
    </div>
  );
}

export const NextButton = () => {
  const dispatch = useDispatch();
  const { currentQuestion, questions } = useSelector(
    (state) => state.questions
  );

  const totalQuestions = questions.length;

  // const handlePrevQuestion = () => {
  //   if (currentQuestion === 1) {
  //     return null;
  //   }
  //   dispatch({
  //     type: "setCurrentQuestion",
  //     payload: currentQuestion - 1,
  //   });
  // };

  const handleSubmit = () => {
    dispatch({
      type: "updateProgress",
      payload: "finish",
    });
    dispatch({
      type: "setCurrentQuestion",
      payload: 1,
    });
    dispatch({
      type: "startOver",
    });
  };

  const handleNextQuestion = () => {
    if (currentQuestion / totalQuestions === 1) {
      return handleSubmit();
    }
    dispatch({
      type: "setCurrentQuestion",
      payload: currentQuestion + 1,
    });
  };

  return (
    <div
      className=" flex flow-row px-4 justify-end"
      onClick={() => handleNextQuestion()}
    >
      <div className=" flex justify-start items-center relative cursor-pointer">
        <FaRightLong size={100} className=" text-gray-200" />
        <span className=" px-3 text-[12px] absolute">CONTINUE</span>
      </div>
    </div>
  );
};

export default QuestionNavigation;
