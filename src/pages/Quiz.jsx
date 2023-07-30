// import React from "react";
// import { useGlobalContext } from "../context";
import ExitButton from "../components/buttons/ExitButton";
import QuestionAnswers from "../components/game-components/QuestionAnswers";
import Pyramid from "../components/game-components/Pyramid";

const Quiz = () => {
  return (
    <div className="flex text-xl text-white h-screen w-screen bg-[url('./assets/images/bg.jpg')] bg-no-repeat bg-center bg-cover">
      <div className="flex flex-col justify-between h-screen w-4/6">
        <div className="">
          <ExitButton />
        </div>
        <div className="w-full">
          <QuestionAnswers />
        </div>
      </div>
      <div className="w-2/6">
        <Pyramid />
      </div>
    </div>
  );
};

export default Quiz;
